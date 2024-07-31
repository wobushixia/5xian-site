import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSell_TwoTone = class IconSell_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 4v7.17L12.83 20 20 12.83 11.17 4H4zm2.5 4C5.67 8 5 7.33 5 6.5S5.67 5 6.5 5 8 5.67 8 6.5 7.33 8 6.5 8z" opacity=".3"/><path d="m21.41 11.41-8.83-8.83c-.37-.37-.88-.58-1.41-.58H4c-1.1 0-2 .9-2 2v7.17c0 .53.21 1.04.59 1.41l8.83 8.83c.78.78 2.05.78 2.83 0l7.17-7.17c.78-.78.78-2.04-.01-2.83zM12.83 20 4 11.17V4h7.17L20 12.83 12.83 20z"/><circle cx="6.5" cy="6.5" r="1.5"/>');
    }
};
IconSell_TwoTone.styles = style;
IconSell_TwoTone = __decorate([
    customElement('mdui-icon-sell--two-tone')
], IconSell_TwoTone);
export { IconSell_TwoTone };
