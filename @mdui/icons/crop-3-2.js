import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCrop_3_2 = class IconCrop_3_2 extends LitElement {
    render() {
        return svgTag('<path d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"/>');
    }
};
IconCrop_3_2.styles = style;
IconCrop_3_2 = __decorate([
    customElement('mdui-icon-crop-3-2')
], IconCrop_3_2);
export { IconCrop_3_2 };
