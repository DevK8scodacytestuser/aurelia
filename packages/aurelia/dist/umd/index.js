(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@aurelia/kernel", "@aurelia/runtime-html", "@aurelia/platform-browser", "@aurelia/fetch-client", "@aurelia/kernel", "@aurelia/router", "@aurelia/runtime-html"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shadowCSS = exports.cssModules = exports.StyleConfiguration = exports.createElement = exports.ShortHandBindingSyntax = exports.getTarget = exports.bindingCommand = exports.IAttributePattern = exports.attributePattern = exports.IAurelia = exports.instructionComposer = exports.ILifecycle = exports.LifecycleFlags = exports.BindingStrategy = exports.BindingMode = exports.IRenderLocation = exports.IEventTarget = exports.INode = exports.registerAliases = exports.alias = exports.IAppRoot = exports.ViewFactory = exports.Controller = exports.children = exports.Bindable = exports.bindable = exports.TaskQueuePriority = exports.valueConverter = exports.ValueConverter = exports.useShadowDOM = exports.CustomElement = exports.customElement = exports.containerless = exports.templateController = exports.CustomAttribute = exports.customAttribute = exports.BindingBehavior = exports.bindingBehavior = exports.proxySubscriberCollection = exports.collectionSubscriberCollection = exports.subscriberCollection = exports.ISignaler = exports.IObserverLocator = exports.computed = exports.RouterRegistration = exports.RouterConfiguration = exports.ViewportInstruction = exports.Router = exports.IRouter = exports.RouterOptions = exports.NavRoute = exports.bound = exports.toArray = exports.pascalCase = exports.kebabCase = exports.camelCase = exports.isArrayIndex = exports.IEventAggregator = exports.EventAggregator = exports.LogLevel = exports.noop = exports.emptyObject = exports.emptyArray = exports.LoggerConfiguration = exports.ILogger = exports.ColorOptions = exports.Metadata = exports.InstanceProvider = exports.transient = exports.singleton = exports.Registration = exports.optional = exports.lazy = exports.IServiceLocator = exports.inject = exports.IContainer = exports.DI = exports.all = exports.HttpClient = exports.HttpClientConfiguration = exports.json = exports.Aurelia = exports.IPlatform = exports.PLATFORM = void 0;
    const kernel_1 = require("@aurelia/kernel");
    const runtime_html_1 = require("@aurelia/runtime-html");
    Object.defineProperty(exports, "IPlatform", { enumerable: true, get: function () { return runtime_html_1.IPlatform; } });
    const platform_browser_1 = require("@aurelia/platform-browser");
    exports.PLATFORM = platform_browser_1.BrowserPlatform.getOrCreate(globalThis);
    function createContainer() {
        return kernel_1.DI.createContainer()
            .register(kernel_1.Registration.instance(runtime_html_1.IPlatform, exports.PLATFORM), runtime_html_1.StandardConfiguration);
    }
    class Aurelia extends runtime_html_1.Aurelia {
        constructor(container = createContainer()) {
            super(container);
        }
        static start(root) {
            return new Aurelia().start(root);
        }
        static app(config) {
            return new Aurelia().app(config);
        }
        static enhance(config) {
            return new Aurelia().enhance(config);
        }
        static register(...params) {
            return new Aurelia().register(...params);
        }
        app(config) {
            if (runtime_html_1.CustomElement.isType(config)) {
                // Default to custom element element name
                const definition = runtime_html_1.CustomElement.getDefinition(config);
                let host = document.querySelector(definition.name);
                if (host === null) {
                    // When no target is found, default to body.
                    // For example, when user forgot to write <my-app></my-app> in html.
                    host = document.body;
                }
                return super.app({
                    host: host,
                    component: config
                });
            }
            return super.app(config);
        }
    }
    exports.Aurelia = Aurelia;
    exports.default = Aurelia;
    var fetch_client_1 = require("@aurelia/fetch-client");
    // RetryConfiguration,
    // RetryableRequest,
    // ValidInterceptorMethodName,
    Object.defineProperty(exports, "json", { enumerable: true, get: function () { return fetch_client_1.json; } });
    // retryStrategy,
    // RetryInterceptor,
    Object.defineProperty(exports, "HttpClientConfiguration", { enumerable: true, get: function () { return fetch_client_1.HttpClientConfiguration; } });
    Object.defineProperty(exports, "HttpClient", { enumerable: true, get: function () { return fetch_client_1.HttpClient; } });
    var kernel_2 = require("@aurelia/kernel");
    Object.defineProperty(exports, "all", { enumerable: true, get: function () { return kernel_2.all; } });
    Object.defineProperty(exports, "DI", { enumerable: true, get: function () { return kernel_2.DI; } });
    Object.defineProperty(exports, "IContainer", { enumerable: true, get: function () { return kernel_2.IContainer; } });
    // IDefaultableInterfaceSymbol,
    // IFactory,
    Object.defineProperty(exports, "inject", { enumerable: true, get: function () { return kernel_2.inject; } });
    Object.defineProperty(exports, "IServiceLocator", { enumerable: true, get: function () { return kernel_2.IServiceLocator; } });
    Object.defineProperty(exports, "lazy", { enumerable: true, get: function () { return kernel_2.lazy; } });
    Object.defineProperty(exports, "optional", { enumerable: true, get: function () { return kernel_2.optional; } });
    // RegisterSelf,
    Object.defineProperty(exports, "Registration", { enumerable: true, get: function () { return kernel_2.Registration; } });
    // ResolveCallback,
    Object.defineProperty(exports, "singleton", { enumerable: true, get: function () { return kernel_2.singleton; } });
    Object.defineProperty(exports, "transient", { enumerable: true, get: function () { return kernel_2.transient; } });
    // Injectable,
    // InterfaceSymbol,
    Object.defineProperty(exports, "InstanceProvider", { enumerable: true, get: function () { return kernel_2.InstanceProvider; } });
    // IPerformance,
    // ITimerHandler,
    // IWindowOrWorkerGlobalScope,
    // KnownKeys,
    // NoInfer,
    // Omit,
    // OptionalKnownKeys,
    // OptionalValuesOf,
    // Overwrite,
    // Param0,
    // Param1,
    // Param2,
    // Param3,
    // Pick2,
    // Pick3,
    // Primitive,
    // Public,
    // Purify,
    // RequiredKnownKeys,
    // RequiredValuesOf,
    // StrictPrimitive,
    // Unwrap,
    // ValuesOf,
    // Writable,
    // IfEquals,
    // ReadonlyKeys,
    // WritableKeys,
    // metadata,
    Object.defineProperty(exports, "Metadata", { enumerable: true, get: function () { return kernel_2.Metadata; } });
    // IConsoleLike,
    Object.defineProperty(exports, "ColorOptions", { enumerable: true, get: function () { return kernel_2.ColorOptions; } });
    // ILogConfig,
    // ILogEvent,
    // ILogEventFactory,
    // ISink,
    Object.defineProperty(exports, "ILogger", { enumerable: true, get: function () { return kernel_2.ILogger; } });
    // LogConfig,
    // DefaultLogEvent,
    // DefaultLogEventFactory,
    // DefaultLogger,
    // ConsoleSink,
    Object.defineProperty(exports, "LoggerConfiguration", { enumerable: true, get: function () { return kernel_2.LoggerConfiguration; } });
    // relativeToFile,
    // join,
    // parseQueryString,
    // IQueryParams,
    Object.defineProperty(exports, "emptyArray", { enumerable: true, get: function () { return kernel_2.emptyArray; } });
    Object.defineProperty(exports, "emptyObject", { enumerable: true, get: function () { return kernel_2.emptyObject; } });
    Object.defineProperty(exports, "noop", { enumerable: true, get: function () { return kernel_2.noop; } });
    // ITraceInfo,
    // ITraceWriter,
    // ILiveLoggingOptions,
    Object.defineProperty(exports, "LogLevel", { enumerable: true, get: function () { return kernel_2.LogLevel; } });
    // IResourceDefinition,
    // IResourceDescriptions,
    // IResourceKind,
    // IResourceType,
    // ResourceDescription,
    // ResourcePartDescription,
    // fromAnnotationOrDefinitionOrTypeOrDefault,
    // fromAnnotationOrTypeOrDefault,
    // fromDefinitionOrDefault,
    Object.defineProperty(exports, "EventAggregator", { enumerable: true, get: function () { return kernel_2.EventAggregator; } });
    Object.defineProperty(exports, "IEventAggregator", { enumerable: true, get: function () { return kernel_2.IEventAggregator; } });
    Object.defineProperty(exports, "isArrayIndex", { enumerable: true, get: function () { return kernel_2.isArrayIndex; } });
    Object.defineProperty(exports, "camelCase", { enumerable: true, get: function () { return kernel_2.camelCase; } });
    Object.defineProperty(exports, "kebabCase", { enumerable: true, get: function () { return kernel_2.kebabCase; } });
    Object.defineProperty(exports, "pascalCase", { enumerable: true, get: function () { return kernel_2.pascalCase; } });
    Object.defineProperty(exports, "toArray", { enumerable: true, get: function () { return kernel_2.toArray; } });
    // nextId,
    // resetId,
    // compareNumber,
    // mergeDistinct,
    // isNumberOrBigInt,
    // isStringOrDate,
    Object.defineProperty(exports, "bound", { enumerable: true, get: function () { return kernel_2.bound; } });
    var router_1 = require("@aurelia/router");
    // Nav,
    Object.defineProperty(exports, "NavRoute", { enumerable: true, get: function () { return router_1.NavRoute; } });
    // IStoredNavigatorEntry,
    // INavigatorEntry,
    // INavigatorOptions,
    // INavigatorFlags,
    // INavigatorState,
    // INavigatorStore,
    // INavigatorViewer,
    // INavigatorViewerEvent,
    // Navigator,
    // QueueItem,
    // IQueueOptions,
    // Queue,
    // RouteHandler,
    // ConfigurableRoute,
    // HandlerEntry,
    // RouteGenerator,
    // TypesRecord,
    // RecognizeResult,
    // RecognizeResults,
    // CharSpec,
    // // State as RouterState, // duplicated in @aurelia/runtime
    // StaticSegment,
    // DynamicSegment,
    // StarSegment,
    // EpsilonSegment,
    // Segment,
    // RouteRecognizer,
    Object.defineProperty(exports, "RouterOptions", { enumerable: true, get: function () { return router_1.RouterOptions; } });
    Object.defineProperty(exports, "IRouter", { enumerable: true, get: function () { return router_1.IRouter; } });
    Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return router_1.Router; } });
    // IViewportOptions,
    // Viewport,
    // ContentStatus,
    // ViewportContent,
    Object.defineProperty(exports, "ViewportInstruction", { enumerable: true, get: function () { return router_1.ViewportInstruction; } });
    Object.defineProperty(exports, "RouterConfiguration", { enumerable: true, get: function () { return router_1.RouterConfiguration; } });
    Object.defineProperty(exports, "RouterRegistration", { enumerable: true, get: function () { return router_1.RouterRegistration; } });
    var runtime_html_2 = require("@aurelia/runtime-html");
    // CallFunctionExpression,
    // connects,
    // observes,
    // callsFunction,
    // hasAncestor,
    // isAssignable,
    // isLeftHandSide,
    // isPrimary,
    // isResource,
    // hasBind,
    // hasUnbind,
    // isLiteral,
    // arePureLiterals,
    // isPureLiteral,
    // CustomExpression,
    // BindingBehaviorExpression,
    // ValueConverterExpression,
    // AssignExpression,
    // ConditionalExpression,
    // AccessThisExpression,
    // AccessScopeExpression,
    // AccessMemberExpression,
    // AccessKeyedExpression,
    // CallScopeExpression,
    // CallMemberExpression,
    // BinaryExpression,
    // UnaryExpression,
    // PrimitiveLiteralExpression,
    // HtmlLiteralExpression,
    // ArrayLiteralExpression,
    // ObjectLiteralExpression,
    // TemplateExpression,
    // TaggedTemplateExpression,
    // ArrayBindingPattern,
    // ObjectBindingPattern,
    // BindingIdentifier,
    // ForOfStatement,
    // Interpolation,
    // AnyBindingExpression,
    // IsPrimary,
    // IsLiteral,
    // IsLeftHandSide,
    // IsUnary,
    // IsBinary,
    // IsConditional,
    // IsAssign,
    // IsValueConverter,
    // IsBindingBehavior,
    // IsAssignable,
    // IsExpression,
    // IsExpressionOrStatement,
    // Connects,
    // Observes,
    // CallsFunction,
    // IsResource,
    // HasBind,
    // HasUnbind,
    // HasAncestor,
    // IVisitor,
    // IExpression,
    // IAccessKeyedExpression,
    // IAccessMemberExpression,
    // IAccessScopeExpression,
    // IAccessThisExpression,
    // IArrayBindingPattern,
    // IArrayLiteralExpression,
    // IAssignExpression,
    // IBinaryExpression,
    // IBindingBehaviorExpression,
    // IBindingIdentifier,
    // ICallFunctionExpression,
    // ICallMemberExpression,
    // ICallScopeExpression,
    // IConditionalExpression,
    // ForOfStatement,
    // IHtmlLiteralExpression,
    // Interpolation,
    // IObjectBindingPattern,
    // IObjectLiteralExpression,
    // IPrimitiveLiteralExpression,
    // ITaggedTemplateExpression,
    // ITemplateExpression,
    // IUnaryExpression,
    // IValueConverterExpression,
    // BinaryOperator,
    // BindingIdentifierOrPattern,
    // UnaryOperator,
    // PropertyBinding,
    // CallBinding,
    // IPartialConnectableBinding,
    // IConnectableBinding,
    // connectable,
    // IExpressionParser,
    // BindingType,
    // MultiInterpolationBinding,
    // InterpolationBinding,
    // LetBinding,
    // RefBinding,
    // ArrayObserver,
    // enableArrayObservation,
    // disableArrayObservation,
    // applyMutationsToIndices,
    // synchronizeIndices,
    // MapObserver,
    // enableMapObservation,
    // disableMapObservation,
    // SetObserver,
    // enableSetObservation,
    // disableSetObservation,
    // BindingContext,
    // OverrideContext,
    // CollectionLengthObserver,
    // CollectionSizeObserver,
    // ComputedOverrides,
    // ComputedLookup,
    Object.defineProperty(exports, "computed", { enumerable: true, get: function () { return runtime_html_2.computed; } });
    // createComputedObserver,
    // CustomSetterObserver,
    // GetterObserver,
    // IDirtyChecker,
    // DirtyCheckProperty,
    // DirtyCheckSettings,
    // IObjectObservationAdapter,
    Object.defineProperty(exports, "IObserverLocator", { enumerable: true, get: function () { return runtime_html_2.IObserverLocator; } });
    // ITargetObserverLocator,
    // ITargetAccessorLocator,
    // getCollectionObserver,
    // ObserverLocator,
    // PrimitiveObserver,
    // PropertyAccessor,
    // ProxyObserver,
    // BindableObserver,
    // SetterObserver,
    Object.defineProperty(exports, "ISignaler", { enumerable: true, get: function () { return runtime_html_2.ISignaler; } });
    Object.defineProperty(exports, "subscriberCollection", { enumerable: true, get: function () { return runtime_html_2.subscriberCollection; } });
    Object.defineProperty(exports, "collectionSubscriberCollection", { enumerable: true, get: function () { return runtime_html_2.collectionSubscriberCollection; } });
    Object.defineProperty(exports, "proxySubscriberCollection", { enumerable: true, get: function () { return runtime_html_2.proxySubscriberCollection; } });
    Object.defineProperty(exports, "bindingBehavior", { enumerable: true, get: function () { return runtime_html_2.bindingBehavior; } });
    Object.defineProperty(exports, "BindingBehavior", { enumerable: true, get: function () { return runtime_html_2.BindingBehavior; } });
    // PartialBindingBehaviorDefinition,
    // BindingBehaviorKind,
    // BindingBehaviorDecorator,
    // BindingBehaviorInstance,
    // BindingBehaviorType,
    // BindingModeBehavior,
    // OneTimeBindingBehavior,
    // ToViewBindingBehavior,
    // FromViewBindingBehavior,
    // TwoWayBindingBehavior,
    // DebounceBindingBehavior,
    // SignalableBinding,
    // SignalBindingBehavior,
    // ThrottleBindingBehavior,
    Object.defineProperty(exports, "customAttribute", { enumerable: true, get: function () { return runtime_html_2.customAttribute; } });
    // CustomAttributeDecorator,
    Object.defineProperty(exports, "CustomAttribute", { enumerable: true, get: function () { return runtime_html_2.CustomAttribute; } });
    // CustomAttributeDefinition
    // CustomAttributeKind,
    // CustomAttributeType,
    // PartialCustomAttributeDefinition,
    Object.defineProperty(exports, "templateController", { enumerable: true, get: function () { return runtime_html_2.templateController; } });
    // FrequentMutations,
    // InfrequentMutations,
    // ObserveShallow,
    // If,
    // Else,
    // Repeat,
    // Replaceable,
    // With,
    Object.defineProperty(exports, "containerless", { enumerable: true, get: function () { return runtime_html_2.containerless; } });
    Object.defineProperty(exports, "customElement", { enumerable: true, get: function () { return runtime_html_2.customElement; } });
    Object.defineProperty(exports, "CustomElement", { enumerable: true, get: function () { return runtime_html_2.CustomElement; } });
    // CustomElementDecorator,
    // CustomElementKind,
    // CustomElementType,
    // CustomElementDefinition,
    // PartialCustomElementDefinition,
    // IElementProjector,
    // IProjectorLocator,
    Object.defineProperty(exports, "useShadowDOM", { enumerable: true, get: function () { return runtime_html_2.useShadowDOM; } });
    Object.defineProperty(exports, "ValueConverter", { enumerable: true, get: function () { return runtime_html_2.ValueConverter; } });
    // ValueConverterType,
    Object.defineProperty(exports, "valueConverter", { enumerable: true, get: function () { return runtime_html_2.valueConverter; } });
    // ISanitizer,
    // SanitizeValueConverter,
    // ViewValueConverter,
    // Clock,
    // IClock,
    // IClockSettings,
    // ITask,
    // TaskQueue,
    // QueueTaskOptions,
    // Task,
    // TaskAbortError,
    // TaskCallback,
    // TaskQueue,
    Object.defineProperty(exports, "TaskQueuePriority", { enumerable: true, get: function () { return runtime_html_2.TaskQueuePriority; } });
    // TaskStatus,
    // QueueTaskTargetOptions,
    Object.defineProperty(exports, "bindable", { enumerable: true, get: function () { return runtime_html_2.bindable; } });
    // PartialBindableDefinition,
    // BindableDefinition,
    Object.defineProperty(exports, "Bindable", { enumerable: true, get: function () { return runtime_html_2.Bindable; } });
    // PartialChildrenDefinition,
    // ChildrenDefinition,
    // Children,
    Object.defineProperty(exports, "children", { enumerable: true, get: function () { return runtime_html_2.children; } });
    // These exports are temporary until we have a proper way to unit test them
    Object.defineProperty(exports, "Controller", { enumerable: true, get: function () { return runtime_html_2.Controller; } });
    Object.defineProperty(exports, "ViewFactory", { enumerable: true, get: function () { return runtime_html_2.ViewFactory; } });
    // IViewLocator,
    // ViewLocator,
    // view,
    // Views,
    // Aurelia, // Replaced by quick-start wrapper
    // IDOMInitializer,
    // ISinglePageApp,
    Object.defineProperty(exports, "IAppRoot", { enumerable: true, get: function () { return runtime_html_2.IAppRoot; } });
    // IfRegistration,
    // ElseRegistration,
    // RepeatRegistration,
    // ReplaceableRegistration,
    // WithRegistration,
    // SanitizeValueConverterRegistration,
    // DebounceBindingBehaviorRegistration,
    // OneTimeBindingBehaviorRegistration,
    // ToViewBindingBehaviorRegistration,
    // FromViewBindingBehaviorRegistration,
    // SignalBindingBehaviorRegistration,
    // ThrottleBindingBehaviorRegistration,
    // TwoWayBindingBehaviorRegistration,
    // RefBindingComposerRegistration,
    // CallBindingComposerRegistration,
    // CustomAttributeComposerRegistration,
    // CustomElementComposerRegistration,
    // InterpolationBindingComposerRegistration,
    // IteratorBindingComposerRegistration,
    // LetElementComposerRegistration,
    // PropertyBindingComposerRegistration,
    // SetPropertyComposerRegistration,
    // TemplateControllerComposerRegistration,
    // DefaultResources as RuntimeDefaultResources,
    // IObserverLocatorRegistration,
    // ILifecycleRegistration,
    // IComposerRegistration,
    // RuntimeConfiguration,
    // AttributeInstruction,
    // HooksDefinition,
    // ICallBindingInstruction,
    // IHydrateAttributeInstruction,
    // IHydrateElementInstruction,
    // IHydrateLetElementInstruction,
    // IHydrateTemplateController,
    // IInterpolationInstruction,
    // IIteratorBindingInstruction,
    // ILetBindingInstruction,
    // InstructionRow,
    // InstructionTypeName,
    // IPropertyBindingInstruction,
    // IRefBindingInstruction,
    // ISetPropertyInstruction,
    // isInstruction,
    // IInstruction,
    // NodeInstruction,
    // Instruction,
    // InstructionType,
    // PartialCustomElementDefinitionParts,
    Object.defineProperty(exports, "alias", { enumerable: true, get: function () { return runtime_html_2.alias; } });
    Object.defineProperty(exports, "registerAliases", { enumerable: true, get: function () { return runtime_html_2.registerAliases; } });
    // DOM, should expose the one exported in runtime-html
    Object.defineProperty(exports, "INode", { enumerable: true, get: function () { return runtime_html_2.INode; } });
    Object.defineProperty(exports, "IEventTarget", { enumerable: true, get: function () { return runtime_html_2.IEventTarget; } });
    Object.defineProperty(exports, "IRenderLocation", { enumerable: true, get: function () { return runtime_html_2.IRenderLocation; } });
    // NodeSequence,
    // INodeSequence,
    // INodeSequenceFactory,
    Object.defineProperty(exports, "BindingMode", { enumerable: true, get: function () { return runtime_html_2.BindingMode; } });
    Object.defineProperty(exports, "BindingStrategy", { enumerable: true, get: function () { return runtime_html_2.BindingStrategy; } });
    // ExpressionKind,
    // Hooks,
    Object.defineProperty(exports, "LifecycleFlags", { enumerable: true, get: function () { return runtime_html_2.LifecycleFlags; } });
    // State,
    // CallBindingInstruction,
    // FromViewBindingInstruction,
    // HydrateAttributeInstruction,
    // HydrateElementInstruction,
    // HydrateTemplateController,
    // InterpolationInstruction,
    // IteratorBindingInstruction,
    // LetBindingInstruction,
    // HydrateLetElementInstruction,
    // OneTimeBindingInstruction,
    // RefBindingInstruction,
    // SetPropertyInstruction,
    // ToViewBindingInstruction,
    // TwoWayBindingInstruction,
    // ViewModelKind,
    // IBinding,
    Object.defineProperty(exports, "ILifecycle", { enumerable: true, get: function () { return runtime_html_2.ILifecycle; } });
    // IObservable,
    // IObservedArray,
    // IObservedMap,
    // IObservedSet,
    // IOverrideContext,
    // IPropertyChangeTracker,
    // IPropertyObserver,
    // Scope,
    // ISubscribable,
    // ISubscriberCollection,
    // ObservedCollection,
    // PropertyObserver,
    // CollectionObserver,
    // ICollectionSubscriberCollection,
    // IProxyObserver,
    // IProxy,
    // IProxySubscribable,
    // IProxySubscriber,
    // IProxySubscriberCollection,
    // ICollectionSubscribable,
    // ISubscriber,
    // isIndexMap,
    // copyIndexMap,
    // cloneIndexMap,
    // createIndexMap,
    Object.defineProperty(exports, "instructionComposer", { enumerable: true, get: function () { return runtime_html_2.instructionComposer; } });
    // DefaultBindingLanguage as JitDefaultBindingLanguage,
    // JitConfiguration,
    // Access,
    // Precedence,
    // Char,
    // These exports are temporary until we have a proper way to unit test them
    // parseExpression,
    // parse,
    // ParserState,
    // ResourceModel,
    // BindableInfo,
    // ElementInfo,
    // AttrInfo,
    // AnySymbol,
    // BindingSymbol,
    // CustomAttributeSymbol,
    // CustomElementSymbol,
    // ElementSymbol,
    // LetElementSymbol,
    // NodeSymbol,
    // ParentNodeSymbol,
    // PlainAttributeSymbol,
    // PlainElementSymbol,
    // ReplacePartSymbol,
    // ResourceAttributeSymbol,
    // SymbolFlags,
    // SymbolWithBindings,
    // SymbolWithMarker,
    // SymbolWithTemplate,
    // TemplateControllerSymbol,
    // TextSymbol
    Object.defineProperty(exports, "IAurelia", { enumerable: true, get: function () { return runtime_html_2.IAurelia; } });
    // Listener,
    // AttributeBinding,
    // AttributeNSAccessor,
    // IInputElement,
    // CheckedObserver,
    // ClassAttributeAccessor,
    // DataAttributeAccessor,
    // ElementPropertyAccessor,
    // IManagedEvent,
    // ListenerTracker,
    // DelegateOrCaptureSubscription,
    // TriggerSubscription,
    // IElementConfiguration,
    // IEventDelegator,
    // IEventSubscriber,
    // IEventTargetWithLookups,
    // EventSubscriber,
    // EventSubscription,
    // EventDelegator,
    // TargetAccessorLocator,
    // TargetObserverLocator,
    // ISelectElement,
    // IOptionElement,
    // SelectValueObserver,
    // StyleAttributeAccessor,
    // ISVGAnalyzer,
    // ValueAttributeObserver,
    // AttrBindingBehavior,
    // SelfableBinding,
    // SelfBindingBehavior,
    // UpdateTriggerBindingBehavior,
    // UpdateTriggerableBinding,
    // UpdateTriggerableObserver,
    // Blur,
    // BlurManager,
    // Focus,
    // Portal,
    // PortalTarget,
    // PortalLifecycleCallback,
    // Subject,
    // Compose,
    // IProjectorLocatorRegistration,
    // ITargetAccessorLocatorRegistration,
    // ITargetObserverLocatorRegistration,
    // ITemplateFactoryRegistration,
    // DefaultComponents as RuntimeHtmlDefaultComponents,
    // CompiledTemplate,
    // ChildrenObserver,
    // IInstructionComposer,
    // IInstructionTypeClassifier,
    // IComposer,
    // IRenderingEngine,
    // ITemplate,
    // ITemplateCompiler,
    // ITemplateFactory,
    // CompositionContext
    // AttrSyntax,
    // IAttributeParser,
    Object.defineProperty(exports, "attributePattern", { enumerable: true, get: function () { return runtime_html_2.attributePattern; } });
    // AttributePatternDefinition,
    Object.defineProperty(exports, "IAttributePattern", { enumerable: true, get: function () { return runtime_html_2.IAttributePattern; } });
    // IAttributePatternHandler,
    // Interpretation,
    // ISyntaxInterpreter,
    // AtPrefixedTriggerAttributePattern,
    // ColonPrefixedBindAttributePattern,
    // DotSeparatedAttributePattern,
    // RefAttributePattern,
    Object.defineProperty(exports, "bindingCommand", { enumerable: true, get: function () { return runtime_html_2.bindingCommand; } });
    // BindingCommandDefinition,
    // BindingCommandKind,
    // BindingCommandType,
    Object.defineProperty(exports, "getTarget", { enumerable: true, get: function () { return runtime_html_2.getTarget; } });
    // CallBindingCommand,
    // DefaultBindingCommand,
    // ForBindingCommand,
    // FromViewBindingCommand,
    // OneTimeBindingCommand,
    // ToViewBindingCommand,
    // TwoWayBindingCommand,
    // IExpressionParserRegistration,
    // DefaultComponents as JitDefaultComponents,
    // RefAttributePatternRegistration,
    // DotSeparatedAttributePatternRegistration,
    // DefaultBindingSyntax,
    // AtPrefixedTriggerAttributePatternRegistration,
    // ColonPrefixedBindAttributePatternRegistration,
    Object.defineProperty(exports, "ShortHandBindingSyntax", { enumerable: true, get: function () { return runtime_html_2.ShortHandBindingSyntax; } });
    // CallBindingCommandRegistration,
    // DefaultBindingCommandRegistration,
    // ForBindingCommandRegistration,
    // FromViewBindingCommandRegistration,
    // OneTimeBindingCommandRegistration,
    // ToViewBindingCommandRegistration,
    // TwoWayBindingCommandRegistration,
    // AttrBindingBehaviorRegistration,
    // SelfBindingBehaviorRegistration,
    // UpdateTriggerBindingBehaviorRegistration,
    // ComposeRegistration,
    // DefaultResources as RuntimeHtmlDefaultResources,
    // AttributeBindingComposerRegistration,
    // ListenerBindingComposerRegistration,
    // SetAttributeComposerRegistration,
    // SetClassAttributeComposerRegistration,
    // SetStyleAttributeComposerRegistration,
    // StylePropertyBindingComposerRegistration,
    // TextBindingComposerRegistration,
    // DefaultComposers,
    // StandardConfiguration,
    Object.defineProperty(exports, "createElement", { enumerable: true, get: function () { return runtime_html_2.createElement; } });
    // CompositionPlan,
    // AttributeInstruction,
    // InstructionRow,
    // NodeInstruction,
    // Instruction,
    // InstructionType,
    // IAttributeBindingInstruction,
    // IListenerBindingInstruction,
    // ISetAttributeInstruction,
    // isInstruction,
    // IStylePropertyBindingInstruction,
    // ITextBindingInstruction,
    // NodeSequenceFactory,
    // FragmentNodeSequence,
    // AttributeBindingInstruction,
    // CaptureBindingInstruction,
    // DelegateBindingInstruction,
    // SetAttributeInstruction,
    // SetClassAttributeInstruction,
    // SetStyleAttributeInstruction,
    // StylePropertyBindingInstruction,
    // TextBindingInstruction,
    // TriggerBindingInstruction,
    // ContainerlessProjector,
    // HostProjector,
    // HTMLProjectorLocator,
    // ShadowDOMProjector,
    Object.defineProperty(exports, "StyleConfiguration", { enumerable: true, get: function () { return runtime_html_2.StyleConfiguration; } });
    // CSSModulesProcessorRegistry,
    Object.defineProperty(exports, "cssModules", { enumerable: true, get: function () { return runtime_html_2.cssModules; } });
    // ShadowDOMRegistry,
    // IShadowDOMStyleFactory,
    Object.defineProperty(exports, "shadowCSS", { enumerable: true, get: function () { return runtime_html_2.shadowCSS; } });
});
//# sourceMappingURL=index.js.map