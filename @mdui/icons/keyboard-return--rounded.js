import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconKeyboardReturn_Rounded = class IconKeyboardReturn_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 8v3H5.83l2.88-2.88A.996.996 0 1 0 7.3 6.71L2.71 11.3a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L5.83 13H20c.55 0 1-.45 1-1V8c0-.55-.45-1-1-1s-1 .45-1 1z"/>');
    }
};
IconKeyboardReturn_Rounded.styles = style;
IconKeyboardReturn_Rounded = __decorate([
    customElement('mdui-icon-keyboard-return--rounded')
], IconKeyboardReturn_Rounded);
export { IconKeyboardReturn_Rounded };