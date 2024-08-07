import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardDoubleArrowUp_Outlined = class IconKeyboardDoubleArrowUp_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 17.59 7.41 19 12 14.42 16.59 19 18 17.59l-6-6z"/><path d="m6 11 1.41 1.41L12 7.83l4.59 4.58L18 11l-6-6z"/>');
    }
};
IconKeyboardDoubleArrowUp_Outlined.styles = style;
IconKeyboardDoubleArrowUp_Outlined = __decorate([
    customElement('mdui-icon-keyboard-double-arrow-up--outlined')
], IconKeyboardDoubleArrowUp_Outlined);
export { IconKeyboardDoubleArrowUp_Outlined };
