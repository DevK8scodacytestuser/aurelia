import { LifecycleFlags, AccessorType } from '../observation.js';
import type { ISubscriber, ICollectionSubscriber, ISubscriberCollection, IConnectable } from '../observation.js';
import type { IConnectableBinding } from '../binding/connectable.js';
import type { IObserverLocator } from './observer-locator.js';
export interface ComputedObserver extends IConnectableBinding, ISubscriberCollection {
}
export declare class ComputedObserver implements IConnectableBinding, ISubscriber, ICollectionSubscriber, ISubscriberCollection {
    readonly obj: object;
    readonly get: (watcher: IConnectable) => unknown;
    readonly set: undefined | ((v: unknown) => void);
    readonly useProxy: boolean;
    readonly observerLocator: IObserverLocator;
    static create(obj: object, key: PropertyKey, descriptor: PropertyDescriptor, observerLocator: IObserverLocator, useProxy: boolean): ComputedObserver;
    id: number;
    interceptor: this;
    type: AccessorType;
    value: unknown;
    private isDirty;
    constructor(obj: object, get: (watcher: IConnectable) => unknown, set: undefined | ((v: unknown) => void), useProxy: boolean, observerLocator: IObserverLocator);
    getValue(): unknown;
    setValue(v: unknown, _flags: LifecycleFlags): void;
    handleChange(): void;
    handleCollectionChange(): void;
    subscribe(subscriber: ISubscriber): void;
    unsubscribe(subscriber: ISubscriber): void;
    private run;
    private compute;
}
//# sourceMappingURL=computed-observer.d.ts.map