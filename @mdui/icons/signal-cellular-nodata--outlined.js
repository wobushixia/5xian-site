import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalCellularNodata_Outlined = class IconSignalCellularNodata_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M22 13h-9v9H2L22 2v11zm-1 2.41L19.59 14l-2.09 2.09L15.41 14 14 15.41l2.09 2.09L14 19.59 15.41 21l2.09-2.08L19.59 21 21 19.59l-2.08-2.09L21 15.41z"/>');
    }
};
IconSignalCellularNodata_Outlined.styles = style;
IconSignalCellularNodata_Outlined = __decorate([
    customElement('mdui-icon-signal-cellular-nodata--outlined')
], IconSignalCellularNodata_Outlined);
export { IconSignalCellularNodata_Outlined };