import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSendTimeExtension = class IconSendTimeExtension extends LitElement {
    render() {
        return svgTag('<path d="M20 6c0-1.1-.9-2-2-2h-4a2.5 2.5 0 0 0-5 0H5.01c-1.1 0-2 .9-2 2v3.8C5.7 9.8 6 11.96 6 12.5s-.29 2.7-3 2.7V19c0 1.1.9 2 2 2h3.8c0-2.16 1.37-2.78 2.2-2.94v-9.3l9 4.5V6z"/><path d="M13 12v4l4 1-4 1v4l10-5z"/>');
    }
};
IconSendTimeExtension.styles = style;
IconSendTimeExtension = __decorate([
    customElement('mdui-icon-send-time-extension')
], IconSendTimeExtension);
export { IconSendTimeExtension };