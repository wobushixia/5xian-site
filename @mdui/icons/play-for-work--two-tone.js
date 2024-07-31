import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayForWork_TwoTone = class IconPlayForWork_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/>');
    }
};
IconPlayForWork_TwoTone.styles = style;
IconPlayForWork_TwoTone = __decorate([
    customElement('mdui-icon-play-for-work--two-tone')
], IconPlayForWork_TwoTone);
export { IconPlayForWork_TwoTone };
