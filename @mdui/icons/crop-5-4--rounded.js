import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCrop_5_4_Rounded = class IconCrop_5_4_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 4H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H5V6h14v12z"/>');
    }
};
IconCrop_5_4_Rounded.styles = style;
IconCrop_5_4_Rounded = __decorate([
    customElement('mdui-icon-crop-5-4--rounded')
], IconCrop_5_4_Rounded);
export { IconCrop_5_4_Rounded };
