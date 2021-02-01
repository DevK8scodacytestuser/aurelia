import { LifecycleFlags } from '@aurelia/runtime-html';
import i18next from 'i18next';
import type { IContainer, IServiceLocator } from '@aurelia/kernel';
import type { Scope, IsExpression, IConnectableBinding, IExpressionParser, IObserverLocator, IPartialConnectableBinding } from '@aurelia/runtime';
import type { CallBindingInstruction, IHydratableController, INode } from '@aurelia/runtime-html';
interface TranslationBindingCreationContext {
    parser: IExpressionParser;
    observerLocator: IObserverLocator;
    context: IContainer;
    controller: IHydratableController;
    target: HTMLElement;
    instruction: CallBindingInstruction;
    isParameterContext?: boolean;
}
export interface TranslationBinding extends IConnectableBinding {
}
export declare class TranslationBinding implements IPartialConnectableBinding {
    observerLocator: IObserverLocator;
    locator: IServiceLocator;
    interceptor: this;
    id: number;
    isBound: boolean;
    expr: IsExpression;
    private readonly i18n;
    private readonly contentAttributes;
    private keyExpression;
    private scope;
    private hostScope;
    private isInterpolation;
    private readonly targetObservers;
    target: HTMLElement;
    private readonly platform;
    private parameter;
    constructor(target: INode, observerLocator: IObserverLocator, locator: IServiceLocator);
    static create({ parser, observerLocator, context, controller, target, instruction, isParameterContext, }: TranslationBindingCreationContext): void;
    private static getBinding;
    $bind(flags: LifecycleFlags, scope: Scope, hostScope: Scope | null): void;
    $unbind(flags: LifecycleFlags): void;
    handleChange(newValue: string | i18next.TOptions, _previousValue: string | i18next.TOptions, flags: LifecycleFlags): void;
    handleLocaleChange(): void;
    useParameter(expr: IsExpression): void;
    private updateTranslations;
    private updateAttribute;
    private preprocessAttributes;
    private isContentAttribute;
    private updateContent;
    private prepareTemplate;
    private addContentToTemplate;
    private ensureKeyExpression;
}
export {};
//# sourceMappingURL=translation-binding.d.ts.map