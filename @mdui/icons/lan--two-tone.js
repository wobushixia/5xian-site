import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLan_TwoTone = class IconLan_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M10 7V4h4v3h-4zM9 17v3H5v-3h4zm10 0v3h-4v-3h4z" opacity=".3"/><path d="M13 22h8v-7h-3v-4h-5V9h3V2H8v7h3v2H6v4H3v7h8v-7H8v-2h8v2h-3v7zM10 7V4h4v3h-4zM9 17v3H5v-3h4zm10 0v3h-4v-3h4z"/>');
    }
};
IconLan_TwoTone.styles = style;
IconLan_TwoTone = __decorate([
    customElement('mdui-icon-lan--two-tone')
], IconLan_TwoTone);
export { IconLan_TwoTone };
