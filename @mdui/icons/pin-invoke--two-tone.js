import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPinInvoke_TwoTone = class IconPinInvoke_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M22 12v6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h10v2H4v12h16v-6h2zm0-5c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm-10.53 5.12-2.83 2.83 1.41 1.41 2.83-2.83L15 15.66V10H9.34l2.13 2.12z"/>');
    }
};
IconPinInvoke_TwoTone.styles = style;
IconPinInvoke_TwoTone = __decorate([
    customElement('mdui-icon-pin-invoke--two-tone')
], IconPinInvoke_TwoTone);
export { IconPinInvoke_TwoTone };