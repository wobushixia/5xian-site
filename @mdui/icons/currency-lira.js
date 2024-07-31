import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCurrencyLira = class IconCurrencyLira extends LitElement {
    render() {
        return svgTag('<path d="M9 8.76V3h2v4.51L15 5v2.36l-4 2.51.01 2.35L15 9.72v2.36l-4 2.51V19c2.76 0 5-2.24 5-5h2c0 3.87-3.13 7-7 7H9v-5.16l-3 1.88v-2.36l3-1.88v-2.36L6 13v-2.36l3-1.88z"/>');
    }
};
IconCurrencyLira.styles = style;
IconCurrencyLira = __decorate([
    customElement('mdui-icon-currency-lira')
], IconCurrencyLira);
export { IconCurrencyLira };
