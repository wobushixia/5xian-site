import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTexture_Sharp = class IconTexture_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19.66 3 3.07 19.59V21h1.41L21.07 4.42V3zm-7.71 0-8.88 8.88v2.83L14.78 3zM3.07 3v4l4-4zm18 18v-4l-4 4zm-8.88 0 8.88-8.88V9.29L9.36 21z"/>');
    }
};
IconTexture_Sharp.styles = style;
IconTexture_Sharp = __decorate([
    customElement('mdui-icon-texture--sharp')
], IconTexture_Sharp);
export { IconTexture_Sharp };