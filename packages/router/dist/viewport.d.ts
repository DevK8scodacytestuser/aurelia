import { LifecycleFlags, IHydratedController, IHydratedParentController } from '@aurelia/runtime-html';
import { ComponentAppellation, IRouteableComponent, IRoute, NavigationInstruction } from './interfaces';
import { IRouter } from './router';
import { ViewportContent } from './viewport-content';
import { ViewportInstruction } from './viewport-instruction';
import { IScopeOwner, IScopeOwnerOptions, NextContentAction, Scope } from './scope';
import { Navigation } from './navigation';
import { IRoutingController, IConnectedCustomElement } from './resources/viewport';
import { NavigationCoordinator } from './navigation-coordinator';
export interface IViewportOptions extends IScopeOwnerOptions {
    scope?: boolean;
    usedBy?: string | string[];
    default?: string;
    fallback?: string;
    noLink?: boolean;
    noTitle?: boolean;
    stateful?: boolean;
    forceDescription?: boolean;
}
export declare class Viewport implements IScopeOwner {
    readonly router: IRouter;
    name: string;
    connectedCE: IConnectedCustomElement | null;
    options: IViewportOptions;
    connectedScope: Scope;
    content: ViewportContent;
    nextContent: ViewportContent | null;
    nextContentAction: NextContentAction;
    forceRemove: boolean;
    path: string | null;
    private clear;
    private connectionResolve?;
    private previousViewportState;
    private cache;
    private historyCache;
    constructor(router: IRouter, name: string, connectedCE: IConnectedCustomElement | null, owningScope: Scope, scope: boolean, options?: IViewportOptions);
    get scope(): Scope;
    get owningScope(): Scope;
    get connectedController(): IRoutingController | null;
    get enabled(): boolean;
    set enabled(enabled: boolean);
    get isViewport(): boolean;
    get isViewportScope(): boolean;
    get isEmpty(): boolean;
    get doForceRemove(): boolean;
    get activeContent(): ViewportContent;
    get nextContentActivated(): boolean;
    get parentNextContentActivated(): boolean;
    get performLoad(): boolean;
    get performSwap(): boolean;
    toString(): string;
    setNextContent(viewportInstruction: ViewportInstruction, navigation: Navigation): NextContentAction;
    setConnectedCE(connectedCE: IConnectedCustomElement, options: IViewportOptions): void;
    remove(connectedCE: IConnectedCustomElement | null): boolean | Promise<boolean>;
    transition(coordinator: NavigationCoordinator): void;
    canUnload(): boolean | Promise<boolean>;
    canLoad(recurse: boolean): boolean | NavigationInstruction | NavigationInstruction[] | Promise<boolean | NavigationInstruction | NavigationInstruction[]>;
    load(recurse: boolean): void | Promise<void>;
    addContent(): void | Promise<void>;
    removeContent(): void | Promise<void>;
    removeChildrenContent(): void | Promise<void>;
    activate(initiator: IHydratedController | null, parent: IHydratedParentController | null, flags: LifecycleFlags, fromParent: boolean): void | Promise<void>;
    deactivate(initiator: IHydratedController | null, parent: IHydratedParentController | null, flags: LifecycleFlags): void | Promise<void>;
    unload(recurse: boolean): void | Promise<void>;
    dispose(): void | Promise<void>;
    finalizeContentChange(): void;
    abortContentChange(): void | Promise<void>;
    wantComponent(component: ComponentAppellation): boolean;
    acceptComponent(component: ComponentAppellation): boolean;
    freeContent(component: IRouteableComponent): void | Promise<void>;
    getRoutes(): IRoute[] | null;
    getTitle(navigationInstruction: NavigationInstruction): string;
    private getComponentType;
    private getComponentInstance;
    private getContentInstruction;
    private clearState;
    private waitForConnected;
}
//# sourceMappingURL=viewport.d.ts.map