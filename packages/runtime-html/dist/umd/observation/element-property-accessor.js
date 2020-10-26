(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ElementPropertyAccessor = void 0;
    /**
     * Property accessor for HTML Elements.
     * Note that Aurelia works with properties, so in all case it will try to assign to property instead of attributes.
     * Unless the property falls into a special set, then it will use attribute for it.
     *
     * @see DataAttributeAccessor
     */
    class ElementPropertyAccessor {
        constructor(flags, obj, propertyKey) {
            this.obj = obj;
            this.propertyKey = propertyKey;
            this.currentValue = void 0;
            this.oldValue = void 0;
            this.hasChanges = false;
            this.task = null;
            // ObserverType.Layout is not always true, it depends on the property
            // but for simplicity, always treat as such
            this.type = 2 /* Node */ | 64 /* Layout */;
            this.persistentFlags = flags & 12295 /* targetObserverFlags */;
        }
        getValue() {
            // is it safe to assume the observer has the latest value?
            // todo: ability to turn on/off cache based on type
            return this.currentValue;
        }
        setValue(newValue, flags) {
            this.currentValue = newValue;
            this.hasChanges = newValue !== this.oldValue;
            if ((flags & 4096 /* noTargetObserverQueue */) === 0) {
                this.flushChanges(flags);
            }
        }
        flushChanges(flags) {
            if (this.hasChanges) {
                this.hasChanges = false;
                const currentValue = this.currentValue;
                this.oldValue = currentValue;
                this.obj[this.propertyKey] = currentValue;
            }
        }
        bind(flags) {
            this.currentValue = this.oldValue = this.obj[this.propertyKey];
        }
    }
    exports.ElementPropertyAccessor = ElementPropertyAccessor;
});
//# sourceMappingURL=element-property-accessor.js.map