import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDirections_TwoTone = class IconDirections_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m3.01 12 9 9L21 12l-9-9-8.99 9zM14 7.5l3.5 3.5-3.5 3.5V12h-4v3H8v-4c0-.55.45-1 1-1h5V7.5z" opacity=".3"/><path d="M13.42 1.58c-.75-.75-2.07-.76-2.83 0l-9 9c-.78.78-.78 2.04 0 2.82l9 9c.39.39.9.58 1.41.58.51 0 1.02-.19 1.41-.58l8.99-8.99c.78-.76.79-2.03.02-2.82l-9-9.01zm-1.41 19.41-9-9 9-9 9 9-9 9zM8 11v4h2v-3h4v2.5l3.5-3.5L14 7.5V10H9c-.55 0-1 .45-1 1z"/>');
    }
};
IconDirections_TwoTone.styles = style;
IconDirections_TwoTone = __decorate([
    customElement('mdui-icon-directions--two-tone')
], IconDirections_TwoTone);
export { IconDirections_TwoTone };