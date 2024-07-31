import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPictureInPictureAlt_Outlined = class IconPictureInPictureAlt_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 11h-8v6h8v-6zm-2 4h-4v-2h4v2zm4-12H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V4.98C23 3.88 22.1 3 21 3zm0 16.02H3V4.97h18v14.05z"/>');
    }
};
IconPictureInPictureAlt_Outlined.styles = style;
IconPictureInPictureAlt_Outlined = __decorate([
    customElement('mdui-icon-picture-in-picture-alt--outlined')
], IconPictureInPictureAlt_Outlined);
export { IconPictureInPictureAlt_Outlined };