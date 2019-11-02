/* eslint-disable jsdoc/check-indentation */
import { bindable, CustomElement, PartialCustomElementDefinition } from '@aurelia/runtime';
import { styles } from '@aurelia/runtime-html';
import * as css from './cards.css';
import * as template from './cards.html';

export interface Card {
  header: string;
  details: string;
}

/**
 * Potential coverage target
 * - `runtime-html`
 *    - `css-modules-registry`
 *    - `class-attribute-accessor`
 *    - `style-attribute-accessor`
 */
export class Cards {

  public static customize(useCSSModule: boolean) {
    /**
     * Note that this is done only for testing.
     * Normally, this goes like this: `@customElement({ name: 'cards', template, dependencies: [styles(css)] })`.
     */
    const defn: PartialCustomElementDefinition = { name: 'cards', template, dependencies: useCSSModule ? [styles(css)] : undefined };
    return CustomElement.define(defn, Cards);
  }

  @bindable public items: Card[];
  @bindable public selected: Card;

  public styleStr: string = "background-color: rgb(255, 0, 0); font-weight: 700 !important";
  public styleObj: any = { 'background-color': 'rgb(255, 0, 0)', 'font-weight': '700 !important' };
  public styleArray: any[] = [{ 'background-color': 'rgb(255, 0, 0)' }, { 'font-weight': '700 !important' }];

  public select(card: Card) {
    this.selected = card;
  }
}
