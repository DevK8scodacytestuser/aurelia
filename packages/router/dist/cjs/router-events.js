"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationErrorEvent = exports.NavigationCancelEvent = exports.NavigationEndEvent = exports.NavigationStartEvent = exports.LocationChangeEvent = exports.RouterEvents = exports.IRouterEvents = void 0;
/* eslint-disable @typescript-eslint/restrict-template-expressions */
const kernel_1 = require("@aurelia/kernel");
class Subscription {
    constructor(events, 
    /**
     * A unique serial number that makes individual subscribers more easily distinguishable in chronological order.
     *
     * Mainly for debugging purposes.
     */
    serial, inner) {
        this.events = events;
        this.serial = serial;
        this.inner = inner;
        this.disposed = false;
    }
    dispose() {
        if (!this.disposed) {
            this.disposed = true;
            this.inner.dispose();
            const subscriptions = this.events['subscriptions'];
            subscriptions.splice(subscriptions.indexOf(this), 1);
        }
    }
}
exports.IRouterEvents = kernel_1.DI.createInterface('IRouterEvents', x => x.singleton(RouterEvents));
let RouterEvents = class RouterEvents {
    constructor(ea, logger) {
        this.ea = ea;
        this.logger = logger;
        this.subscriptionSerial = 0;
        this.subscriptions = [];
        this.logger = logger.scopeTo('RouterEvents');
    }
    publish(event) {
        this.logger.trace(`publishing %s`, event);
        this.ea.publish(event.name, event);
    }
    subscribe(event, callback) {
        const subscription = new Subscription(this, ++this.subscriptionSerial, this.ea.subscribe(event, (message) => {
            this.logger.trace(`handling %s for subscription #${subscription.serial}`, event);
            callback(message);
        }));
        this.subscriptions.push(subscription);
        return subscription;
    }
};
RouterEvents = __decorate([
    __param(0, kernel_1.IEventAggregator),
    __param(1, kernel_1.ILogger)
], RouterEvents);
exports.RouterEvents = RouterEvents;
class LocationChangeEvent {
    constructor(id, url, trigger, state) {
        this.id = id;
        this.url = url;
        this.trigger = trigger;
        this.state = state;
    }
    get name() { return 'au:router:location-change'; }
    toString() {
        return `LocationChangeEvent(id:${this.id},url:'${this.url}',trigger:'${this.trigger}')`;
    }
}
exports.LocationChangeEvent = LocationChangeEvent;
class NavigationStartEvent {
    constructor(id, instructions, trigger, managedState) {
        this.id = id;
        this.instructions = instructions;
        this.trigger = trigger;
        this.managedState = managedState;
    }
    get name() { return 'au:router:navigation-start'; }
    toString() {
        return `NavigationStartEvent(id:${this.id},instructions:'${this.instructions}',trigger:'${this.trigger}')`;
    }
}
exports.NavigationStartEvent = NavigationStartEvent;
class NavigationEndEvent {
    constructor(id, instructions, finalInstructions) {
        this.id = id;
        this.instructions = instructions;
        this.finalInstructions = finalInstructions;
    }
    get name() { return 'au:router:navigation-end'; }
    toString() {
        return `NavigationEndEvent(id:${this.id},instructions:'${this.instructions}',finalInstructions:'${this.finalInstructions}')`;
    }
}
exports.NavigationEndEvent = NavigationEndEvent;
class NavigationCancelEvent {
    constructor(id, instructions, reason) {
        this.id = id;
        this.instructions = instructions;
        this.reason = reason;
    }
    get name() { return 'au:router:navigation-cancel'; }
    toString() {
        return `NavigationCancelEvent(id:${this.id},instructions:'${this.instructions}',reason:${String(this.reason)})`;
    }
}
exports.NavigationCancelEvent = NavigationCancelEvent;
class NavigationErrorEvent {
    constructor(id, instructions, error) {
        this.id = id;
        this.instructions = instructions;
        this.error = error;
    }
    get name() { return 'au:router:navigation-error'; }
    toString() {
        return `NavigationErrorEvent(id:${this.id},instructions:'${this.instructions}',error:${String(this.error)})`;
    }
}
exports.NavigationErrorEvent = NavigationErrorEvent;
//# sourceMappingURL=router-events.js.map