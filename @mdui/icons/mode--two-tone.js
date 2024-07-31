import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMode_TwoTone = class IconMode_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14.06 9.02 5 18.08V19h.92l9.06-9.06z" opacity=".3"/><path d="M18.37 3.29c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41l-2.34-2.34zm-.56 6.65-3.75-3.75L3 17.25V21h3.75L17.81 9.94zM5 19v-.92l9.06-9.06.92.92L5.92 19H5z"/>');
    }
};
IconMode_TwoTone.styles = style;
IconMode_TwoTone = __decorate([
    customElement('mdui-icon-mode--two-tone')
], IconMode_TwoTone);
export { IconMode_TwoTone };
