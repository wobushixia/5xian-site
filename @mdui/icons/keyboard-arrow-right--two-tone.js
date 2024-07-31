import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardArrowRight_TwoTone = class IconKeyboardArrowRight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>');
    }
};
IconKeyboardArrowRight_TwoTone.styles = style;
IconKeyboardArrowRight_TwoTone = __decorate([
    customElement('mdui-icon-keyboard-arrow-right--two-tone')
], IconKeyboardArrowRight_TwoTone);
export { IconKeyboardArrowRight_TwoTone };