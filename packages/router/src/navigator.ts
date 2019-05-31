import { Reporter } from '@aurelia/kernel';

export interface IStoredNavigationEntry {
  instruction: string;
  fullStateInstruction: string;
  index?: number;
  firstEntry?: boolean; // Index might change to not require first === 0, firstEntry should be reliable
  path?: string;
  title?: string;
  query?: string;
  parameters?: Record<string, string>;
  parameterList?: string[];
  data?: Record<string, unknown>;
}

export interface INavigationEntry extends IStoredNavigationEntry {
  fromBrowser?: boolean;
  replacing?: boolean;
  refreshing?: boolean;
  historyMovement?: number;
  resolve?: ((value?: void | PromiseLike<void>) => void);
  reject?: ((value?: void | PromiseLike<void>) => void);
}

export interface INavigatorOptions {
  viewer?: any;
  store?: any;
  callback?(instruction: INavigationInstruction): void;
}

export interface INavigationFlags {
  first?: boolean;
  new?: boolean;
  refresh?: boolean;
  forward?: boolean;
  back?: boolean;
  replace?: boolean;
}

export interface INavigationInstruction extends INavigationEntry {
  navigation?: INavigationFlags;
  previous?: IStoredNavigationEntry;
  repeating?: boolean;
}

interface INavigatorState {
  state: Record<string, unknown>;
  entries: IStoredNavigationEntry[];
  currentEntry: IStoredNavigationEntry;
}

export class Navigator {
  public currentEntry: INavigationInstruction;
  public entries: IStoredNavigationEntry[];

  private readonly pendingNavigations: INavigationInstruction[];
  private processingNavigation: INavigationInstruction;

  private options: INavigatorOptions;
  private isActive: boolean;

  constructor() {
    this.currentEntry = null;
    this.entries = null;
    this.pendingNavigations = [];
    this.processingNavigation = null;

    this.options = null;
    this.isActive = false;
  }

  public activate(options?: INavigatorOptions): void {
    if (this.isActive) {
      throw Reporter.error(0); // TODO: create error code for 'Navigator has already been activated.'
    }

    this.isActive = true;
    this.options = { ...options };
  }

  public deactivate(): void {
    this.isActive = false;
  }

  public async navigate(entry: INavigationEntry): Promise<void> {
    // tslint:disable-next-line:promise-must-complete
    const promise: Promise<void> = new Promise((resolve, reject) => {
      entry.resolve = resolve;
      entry.reject = reject;
    });
    this.pendingNavigations.push(entry);
    this.processNavigations();
    return promise;
  }

  public processNavigations(): void {
    if (this.processingNavigation !== null || !this.pendingNavigations.length) {
      return;
    }
    const entry = this.processingNavigation = this.pendingNavigations.shift();
    const navigationFlags: INavigationFlags = {};

    if (!this.currentEntry) { // Refresh or first entry
      this.loadState();
      if (this.currentEntry) {
        navigationFlags.refresh = true;
      } else {
        navigationFlags.first = true;
        navigationFlags.new = true;
        // TODO: Should this really be created here? Shouldn't it be in the viewer?
        this.currentEntry = {
          index: 0,
          instruction: null,
          fullStateInstruction: null,
          // path: this.options.viewer.getPath(true),
          // fromBrowser: null,
        };
        this.entries = [];
      }
    }
    if (entry.index !== undefined && !entry.replacing && !entry.refreshing) { // History navigation
      entry.historyMovement = entry.index - this.currentEntry.index;
      entry.instruction = entry.fullStateInstruction;
      entry.replacing = true;
      if (entry.historyMovement > 0) {
        navigationFlags.forward = true;
      } else if (entry.historyMovement < 0) {
        navigationFlags.back = true;
      }
    } else { // New entry
      navigationFlags.new = true;
      entry.index = (entry.replacing ? entry.index : this.entries.length);
    }
    this.callback(entry, navigationFlags, this.currentEntry);
  }

  public async refresh(): Promise<void> {
    const entry = this.currentEntry;
    if (!entry) {
      return Promise.reject();
    }
    entry.replacing = true;
    entry.refreshing = true;
    return this.navigate(entry);
  }

  public go(movement: number): Promise<void> {
    const newIndex = this.currentEntry.index + movement;
    if (newIndex >= this.entries.length) {
      return Promise.reject();
    }
    const entry = this.entries[newIndex];
    return this.navigate(entry);
  }

  public setEntryTitle(title: string): Promise<void> {
    this.currentEntry.title = title;
    return this.saveState();
  }

  get titles(): string[] {
    return (this.entries ? this.entries.slice(0, this.currentEntry.index + 1).map((value) => value.title) : []);
  }

  public getState(): INavigatorState {
    const state = { ...this.options.store.state };
    const entries = (state.NavigationEntries || []) as IStoredNavigationEntry[];
    const currentEntry = state.NavigationEntry as IStoredNavigationEntry;
    return { state, entries, currentEntry };
  }

  public loadState(): void {
    const state = this.getState();
    this.entries = (state.entries || []) as IStoredNavigationEntry[];
    this.currentEntry = state.currentEntry as IStoredNavigationEntry;
  }

  public async saveState(push: boolean = false): Promise<void> {
    const storedEntry = this.storableEntry(this.currentEntry);
    this.entries[storedEntry.index] = storedEntry;
    const state = {
      'NavigationEntries': this.entries,
      'NavigationEntry': storedEntry,
    };
    // console.log('saveState', state);
    if (push) {
      return this.options.store.push(state);
    } else {
      return this.options.store.replace(state);
    }
  }

  public storableEntry(entry: INavigationInstruction): IStoredNavigationEntry {
    const {
      previous,
      fromBrowser,
      replacing,
      refreshing,
      historyMovement,
      navigation,

      ...storableEntry } = entry;
    return storableEntry;
  }

  public finalize(navigation: INavigationInstruction): void {
    this.currentEntry = navigation;
    if (this.currentEntry.replacing) {
      this.entries[this.currentEntry.index] = this.storableEntry(this.currentEntry);
      this.saveState();
    } else {
      this.entries = this.entries.slice(0, this.currentEntry.index);
      this.entries.push(this.storableEntry(this.currentEntry));
      this.saveState(true);
    }
    this.processingNavigation = null;
    this.currentEntry.resolve();
    this.processNavigations();
  }

  public cancel(navigation: INavigationInstruction): void {
    if (navigation.fromBrowser) {
      // TODO: Update browser history or path but ignore change event
    }
    this.processingNavigation = null;
    this.currentEntry.reject();
    this.processNavigations();
  }

  private callback(entry: INavigationEntry, navigationFlags: INavigationFlags, previousEntry: INavigationEntry): void {
    const instruction: INavigationInstruction = { ...entry };
    instruction.navigation = navigationFlags;
    instruction.previous = this.storableEntry(previousEntry);
    Reporter.write(10000, 'callback', instruction, instruction.previous, this.entries);
    if (this.options.callback) {
      this.options.callback(instruction);
    }
  }
}
