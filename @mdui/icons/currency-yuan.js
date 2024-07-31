import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurrencyYuan = class IconCurrencyYuan extends LitElement {
    render() {
        return svgTag('<path d="M13.28 12H18v2h-5v7h-2v-7H6v-2h4.72L5 3h2.37L12 10.29 16.63 3H19z"/>');
    }
};
IconCurrencyYuan.styles = style;
IconCurrencyYuan = __decorate([
    customElement('mdui-icon-currency-yuan')
], IconCurrencyYuan);
export { IconCurrencyYuan };