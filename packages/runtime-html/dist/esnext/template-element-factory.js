var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { DI } from '@aurelia/kernel';
import { IPlatform } from './platform';
export const ITemplateElementFactory = DI.createInterface('ITemplateElementFactory').withDefault(x => x.singleton(TemplateElementFactory));
const markupCache = {};
let TemplateElementFactory = class TemplateElementFactory {
    constructor(p) {
        this.p = p;
        this.template = p.document.createElement('template');
    }
    createTemplate(input) {
        var _a;
        if (typeof input === 'string') {
            let result = markupCache[input];
            if (result === void 0) {
                const template = this.template;
                template.innerHTML = input;
                const node = template.content.firstElementChild;
                // if the input is either not wrapped in a template or there is more than one node,
                // return the whole template that wraps it/them (and create a new one for the next input)
                if (node == null || node.nodeName !== 'TEMPLATE' || node.nextElementSibling != null) {
                    this.template = this.p.document.createElement('template');
                    result = template;
                }
                else {
                    // the node to return is both a template and the only node, so return just the node
                    // and clean up the template for the next input
                    template.content.removeChild(node);
                    result = node;
                }
                markupCache[input] = result;
            }
            return result.cloneNode(true);
        }
        if (input.nodeName !== 'TEMPLATE') {
            // if we get one node that is not a template, wrap it in one
            const template = this.p.document.createElement('template');
            template.content.appendChild(input);
            return template;
        }
        // we got a template element, remove it from the DOM if it's present there and don't
        // do any other processing
        (_a = input.parentNode) === null || _a === void 0 ? void 0 : _a.removeChild(input);
        return input.cloneNode(true);
    }
};
TemplateElementFactory = __decorate([
    __param(0, IPlatform),
    __metadata("design:paramtypes", [Object])
], TemplateElementFactory);
export { TemplateElementFactory };
//# sourceMappingURL=template-element-factory.js.map