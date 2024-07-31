import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartScreen_TwoTone = class IconSmartScreen_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 17h1V7H3v10zM20 7v10h1V7h-1z" opacity=".3"/><path d="M14 11.25h-1.5v1.5H14v-1.5zm2.5 0H15v1.5h1.5v-1.5zm-5 0H10v1.5h1.5v-1.5zm-2.5 0H7.5v1.5H9v-1.5zM21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 17H3V7h1v10zm14 0H6V7h12v10zm3 0h-1V7h1v10z"/>');
    }
};
IconSmartScreen_TwoTone.styles = style;
IconSmartScreen_TwoTone = __decorate([
    customElement('mdui-icon-smart-screen--two-tone')
], IconSmartScreen_TwoTone);
export { IconSmartScreen_TwoTone };