import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWebAsset_TwoTone = class IconWebAsset_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 8h14v10H5z" opacity=".3"/><path d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H5V8h14v10z"/>');
    }
};
IconWebAsset_TwoTone.styles = style;
IconWebAsset_TwoTone = __decorate([
    customElement('mdui-icon-web-asset--two-tone')
], IconWebAsset_TwoTone);
export { IconWebAsset_TwoTone };
