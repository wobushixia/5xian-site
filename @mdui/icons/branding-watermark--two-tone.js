import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrandingWatermark_TwoTone = class IconBrandingWatermark_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M3 19h18V5H3v14zm8-7h9v6h-9v-6z" opacity=".3"/><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/>');
    }
};
IconBrandingWatermark_TwoTone.styles = style;
IconBrandingWatermark_TwoTone = __decorate([
    customElement('mdui-icon-branding-watermark--two-tone')
], IconBrandingWatermark_TwoTone);
export { IconBrandingWatermark_TwoTone };