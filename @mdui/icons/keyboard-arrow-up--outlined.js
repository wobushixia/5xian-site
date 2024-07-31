import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowUp_Outlined = class IconKeyboardArrowUp_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M7.41 15.41 12 10.83l4.59 4.58L18 14l-6-6-6 6 1.41 1.41z"/>');
    }
};
IconKeyboardArrowUp_Outlined.styles = style;
IconKeyboardArrowUp_Outlined = __decorate([
    customElement('mdui-icon-keyboard-arrow-up--outlined')
], IconKeyboardArrowUp_Outlined);
export { IconKeyboardArrowUp_Outlined };