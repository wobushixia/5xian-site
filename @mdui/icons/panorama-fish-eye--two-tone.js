import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPanoramaFishEye_TwoTone = class IconPanoramaFishEye_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" opacity=".3"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>');
    }
};
IconPanoramaFishEye_TwoTone.styles = style;
IconPanoramaFishEye_TwoTone = __decorate([
    customElement('mdui-icon-panorama-fish-eye--two-tone')
], IconPanoramaFishEye_TwoTone);
export { IconPanoramaFishEye_TwoTone };