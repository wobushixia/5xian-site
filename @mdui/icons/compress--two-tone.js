import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCompress_TwoTone = class IconCompress_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 9h16v2H4zm12-5h-3V1h-2v3H8l4 4zM8 19h3v3h2v-3h3l-4-4zm-4-7h16v2H4z"/>');
    }
};
IconCompress_TwoTone.styles = style;
IconCompress_TwoTone = __decorate([
    customElement('mdui-icon-compress--two-tone')
], IconCompress_TwoTone);
export { IconCompress_TwoTone };