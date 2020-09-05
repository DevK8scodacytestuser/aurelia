import { IIndexable, Reporter } from '@aurelia/kernel';
import { LifecycleFlags } from '../flags';
import { IPropertyObserver, ISubscriber } from '../observation';
import { subscriberCollection } from './subscriber-collection';
import { collecting, getCurrentSubscriber } from './subscriber-switcher';

export interface SetterObserver extends IPropertyObserver<IIndexable, PropertyKey> {}

type $PropertyKey = Exclude<PropertyKey, symbol>;
/**
 * Observer for the mutation of object property value employing getter-setter strategy.
 * This is used for observing object properties that has no decorator.
 */
@subscriberCollection()
export class SetterObserver {
  public currentValue: unknown = void 0;
  public oldValue: unknown = void 0;

  public readonly obj: IIndexable;
  public readonly propertyKey: PropertyKey;
  public readonly persistentFlags: LifecycleFlags;
  public inBatch: boolean = false;
  public observing: boolean = false;

  public constructor(
    obj: object,
    propertyKey: PropertyKey,
    flags: LifecycleFlags = 0,
  ) {
    this.obj = obj as IIndexable;
    this.propertyKey = propertyKey;
    this.currentValue = (obj as IIndexable)[propertyKey as string];
    this.persistentFlags = flags & LifecycleFlags.persistentBindingFlags;
    // todo: should it always convert at the start
  }

  public getValue(): unknown {
    return this.currentValue;
  }

  public setValue(newValue: unknown, flags: LifecycleFlags): void {
    if (this.observing) {
      const currentValue = this.currentValue;
      this.currentValue = newValue;
      this.callSubscribers(newValue, currentValue, this.persistentFlags | flags);
    } else {
      // If subscribe() has been called, the target property descriptor is replaced by these getter/setter methods,
      // so calling obj[propertyKey] will actually return this.currentValue.
      // However, if subscribe() was not yet called (indicated by !this.observing), the target descriptor
      // is unmodified and we need to explicitly set the property value.
      // This will happen in one-time, to-view and two-way bindings during $bind, meaning that the $bind will not actually update the target value.
      // This wasn't visible in vCurrent due to connect-queue always doing a delayed update, so in many cases it didn't matter whether $bind updated the target or not.
      this.obj[this.propertyKey as $PropertyKey] = newValue;
    }
  }

  public flushBatch(flags: LifecycleFlags): void {
    this.inBatch = false;
    const currentValue = this.currentValue;
    const oldValue = this.oldValue;
    this.oldValue = currentValue;
    this.callSubscribers(currentValue, oldValue, this.persistentFlags | flags);
  }

  public subscribe(subscriber: ISubscriber): void {
    if (this.observing === false) {
      this.start();
    }

    this.addSubscriber(subscriber);
  }

  public start(): void {
    if (this.observing) {
      return;
    }
    this.observing = true;
    if (
      !Reflect.defineProperty(
        this.obj,
        this.propertyKey,
        {
          enumerable: true,
          configurable: true,
          get: this.$get.bind(this),
          set: this.$set.bind(this),
        }
      )
    ) {
      Reporter.write(1, this.propertyKey, this.obj);
    }
  }

  public notify(): void {
    this.callSubscribers(this.currentValue, this.oldValue, LifecycleFlags.none);
  }

  private $get() {
    if (collecting) {
      const currentSubscriber = getCurrentSubscriber();
      if (currentSubscriber != null) {
        this.subscribe(currentSubscriber);
      }
    }
    return this.getValue();
  }

  private $set(value: unknown): void {
    this.setValue(value, LifecycleFlags.none);
  }
}
