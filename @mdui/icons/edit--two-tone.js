import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEdit_TwoTone = class IconEdit_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 18.08V19h.92l9.06-9.06-.92-.92z" opacity=".3"/><path d="M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19z"/>');
    }
};
IconEdit_TwoTone.styles = style;
IconEdit_TwoTone = __decorate([
    customElement('mdui-icon-edit--two-tone')
], IconEdit_TwoTone);
export { IconEdit_TwoTone };