import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPolyline_Outlined = class IconPolyline_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6h-6zM12 4h2v2h-2V4zM7 14H5v-2h2v2zm12 6h-2v-2h2v2z"/>');
    }
};
IconPolyline_Outlined.styles = style;
IconPolyline_Outlined = __decorate([
    customElement('mdui-icon-polyline--outlined')
], IconPolyline_Outlined);
export { IconPolyline_Outlined };
