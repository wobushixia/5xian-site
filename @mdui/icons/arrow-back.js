import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowBack = class IconArrowBack extends LitElement {
    render() {
        return svgTag('<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>');
    }
};
IconArrowBack.styles = style;
IconArrowBack = __decorate([
    customElement('mdui-icon-arrow-back')
], IconArrowBack);
export { IconArrowBack };
