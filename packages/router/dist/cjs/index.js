"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationErrorEvent = exports.NavigationCancelEvent = exports.NavigationEndEvent = exports.NavigationStartEvent = exports.LocationChangeEvent = exports.IRouterEvents = exports.Navigation = exports.Transition = exports.NavigationOptions = exports.RouterOptions = exports.Router = exports.IRouter = exports.toManagedState = exports.isManagedState = exports.AuNavId = exports.RouteTree = exports.RouteNode = exports.ExpressionKind = exports.ParameterExpression = exports.ParameterListExpression = exports.ViewportExpression = exports.ActionExpression = exports.ComponentExpression = exports.SegmentExpression = exports.SegmentGroupExpression = exports.ScopedSegmentExpression = exports.CompositeSegmentExpression = exports.RouteExpression = exports.AST = exports.RouteDefinition = exports.RouteContext = exports.IRouteContext = exports.route = exports.Route = exports.ChildRouteConfig = exports.RouteConfig = exports.IBaseHrefProvider = exports.ILocationManager = exports.IViewportInstruction = exports.ComponentAgent = exports.HrefCustomAttributeRegistration = exports.HrefCustomAttribute = exports.LoadCustomAttributeRegistration = exports.LoadCustomAttribute = exports.ViewportCustomElementRegistration = exports.ViewportCustomElement = exports.DefaultResources = exports.DefaultComponents = exports.RouterRegistration = exports.RouterConfiguration = void 0;
exports.ViewportAgent = exports.IStateManager = void 0;
var configuration_js_1 = require("./configuration.js");
Object.defineProperty(exports, "RouterConfiguration", { enumerable: true, get: function () { return configuration_js_1.RouterConfiguration; } });
Object.defineProperty(exports, "RouterRegistration", { enumerable: true, get: function () { return configuration_js_1.RouterRegistration; } });
Object.defineProperty(exports, "DefaultComponents", { enumerable: true, get: function () { return configuration_js_1.DefaultComponents; } });
Object.defineProperty(exports, "DefaultResources", { enumerable: true, get: function () { return configuration_js_1.DefaultResources; } });
Object.defineProperty(exports, "ViewportCustomElement", { enumerable: true, get: function () { return configuration_js_1.ViewportCustomElement; } });
Object.defineProperty(exports, "ViewportCustomElementRegistration", { enumerable: true, get: function () { return configuration_js_1.ViewportCustomElementRegistration; } });
Object.defineProperty(exports, "LoadCustomAttribute", { enumerable: true, get: function () { return configuration_js_1.LoadCustomAttribute; } });
Object.defineProperty(exports, "LoadCustomAttributeRegistration", { enumerable: true, get: function () { return configuration_js_1.LoadCustomAttributeRegistration; } });
Object.defineProperty(exports, "HrefCustomAttribute", { enumerable: true, get: function () { return configuration_js_1.HrefCustomAttribute; } });
Object.defineProperty(exports, "HrefCustomAttributeRegistration", { enumerable: true, get: function () { return configuration_js_1.HrefCustomAttributeRegistration; } });
var component_agent_js_1 = require("./component-agent.js");
Object.defineProperty(exports, "ComponentAgent", { enumerable: true, get: function () { return component_agent_js_1.ComponentAgent; } });
var instructions_js_1 = require("./instructions.js");
Object.defineProperty(exports, "IViewportInstruction", { enumerable: true, get: function () { return instructions_js_1.IViewportInstruction; } });
var location_manager_js_1 = require("./location-manager.js");
Object.defineProperty(exports, "ILocationManager", { enumerable: true, get: function () { return location_manager_js_1.ILocationManager; } });
Object.defineProperty(exports, "IBaseHrefProvider", { enumerable: true, get: function () { return location_manager_js_1.IBaseHrefProvider; } });
var route_js_1 = require("./route.js");
Object.defineProperty(exports, "RouteConfig", { enumerable: true, get: function () { return route_js_1.RouteConfig; } });
Object.defineProperty(exports, "ChildRouteConfig", { enumerable: true, get: function () { return route_js_1.ChildRouteConfig; } });
Object.defineProperty(exports, "Route", { enumerable: true, get: function () { return route_js_1.Route; } });
Object.defineProperty(exports, "route", { enumerable: true, get: function () { return route_js_1.route; } });
var route_context_js_1 = require("./route-context.js");
Object.defineProperty(exports, "IRouteContext", { enumerable: true, get: function () { return route_context_js_1.IRouteContext; } });
Object.defineProperty(exports, "RouteContext", { enumerable: true, get: function () { return route_context_js_1.RouteContext; } });
var route_definition_js_1 = require("./route-definition.js");
Object.defineProperty(exports, "RouteDefinition", { enumerable: true, get: function () { return route_definition_js_1.RouteDefinition; } });
var route_expression_js_1 = require("./route-expression.js");
Object.defineProperty(exports, "AST", { enumerable: true, get: function () { return route_expression_js_1.AST; } });
Object.defineProperty(exports, "RouteExpression", { enumerable: true, get: function () { return route_expression_js_1.RouteExpression; } });
Object.defineProperty(exports, "CompositeSegmentExpression", { enumerable: true, get: function () { return route_expression_js_1.CompositeSegmentExpression; } });
Object.defineProperty(exports, "ScopedSegmentExpression", { enumerable: true, get: function () { return route_expression_js_1.ScopedSegmentExpression; } });
Object.defineProperty(exports, "SegmentGroupExpression", { enumerable: true, get: function () { return route_expression_js_1.SegmentGroupExpression; } });
Object.defineProperty(exports, "SegmentExpression", { enumerable: true, get: function () { return route_expression_js_1.SegmentExpression; } });
Object.defineProperty(exports, "ComponentExpression", { enumerable: true, get: function () { return route_expression_js_1.ComponentExpression; } });
Object.defineProperty(exports, "ActionExpression", { enumerable: true, get: function () { return route_expression_js_1.ActionExpression; } });
Object.defineProperty(exports, "ViewportExpression", { enumerable: true, get: function () { return route_expression_js_1.ViewportExpression; } });
Object.defineProperty(exports, "ParameterListExpression", { enumerable: true, get: function () { return route_expression_js_1.ParameterListExpression; } });
Object.defineProperty(exports, "ParameterExpression", { enumerable: true, get: function () { return route_expression_js_1.ParameterExpression; } });
Object.defineProperty(exports, "ExpressionKind", { enumerable: true, get: function () { return route_expression_js_1.ExpressionKind; } });
var route_tree_js_1 = require("./route-tree.js");
Object.defineProperty(exports, "RouteNode", { enumerable: true, get: function () { return route_tree_js_1.RouteNode; } });
Object.defineProperty(exports, "RouteTree", { enumerable: true, get: function () { return route_tree_js_1.RouteTree; } });
var router_js_1 = require("./router.js");
Object.defineProperty(exports, "AuNavId", { enumerable: true, get: function () { return router_js_1.AuNavId; } });
Object.defineProperty(exports, "isManagedState", { enumerable: true, get: function () { return router_js_1.isManagedState; } });
Object.defineProperty(exports, "toManagedState", { enumerable: true, get: function () { return router_js_1.toManagedState; } });
Object.defineProperty(exports, "IRouter", { enumerable: true, get: function () { return router_js_1.IRouter; } });
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return router_js_1.Router; } });
Object.defineProperty(exports, "RouterOptions", { enumerable: true, get: function () { return router_js_1.RouterOptions; } });
Object.defineProperty(exports, "NavigationOptions", { enumerable: true, get: function () { return router_js_1.NavigationOptions; } });
Object.defineProperty(exports, "Transition", { enumerable: true, get: function () { return router_js_1.Transition; } });
Object.defineProperty(exports, "Navigation", { enumerable: true, get: function () { return router_js_1.Navigation; } });
var router_events_js_1 = require("./router-events.js");
Object.defineProperty(exports, "IRouterEvents", { enumerable: true, get: function () { return router_events_js_1.IRouterEvents; } });
Object.defineProperty(exports, "LocationChangeEvent", { enumerable: true, get: function () { return router_events_js_1.LocationChangeEvent; } });
Object.defineProperty(exports, "NavigationStartEvent", { enumerable: true, get: function () { return router_events_js_1.NavigationStartEvent; } });
Object.defineProperty(exports, "NavigationEndEvent", { enumerable: true, get: function () { return router_events_js_1.NavigationEndEvent; } });
Object.defineProperty(exports, "NavigationCancelEvent", { enumerable: true, get: function () { return router_events_js_1.NavigationCancelEvent; } });
Object.defineProperty(exports, "NavigationErrorEvent", { enumerable: true, get: function () { return router_events_js_1.NavigationErrorEvent; } });
var state_manager_js_1 = require("./state-manager.js");
Object.defineProperty(exports, "IStateManager", { enumerable: true, get: function () { return state_manager_js_1.IStateManager; } });
var viewport_agent_js_1 = require("./viewport-agent.js");
Object.defineProperty(exports, "ViewportAgent", { enumerable: true, get: function () { return viewport_agent_js_1.ViewportAgent; } });
//# sourceMappingURL=index.js.map