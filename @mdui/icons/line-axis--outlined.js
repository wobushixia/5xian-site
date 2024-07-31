import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLineAxis_Outlined = class IconLineAxis_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m22 7.43-1.41-1.41-4.03 4.53L9.5 4 2 11.51l1.5 1.5 6.14-6.15 5.59 5.18-1.73 1.95-4-4L2 17.5 3.5 19l6-6.01 4 4 3.19-3.59 3.9 3.61L22 15.6l-3.98-3.7z"/>');
    }
};
IconLineAxis_Outlined.styles = style;
IconLineAxis_Outlined = __decorate([
    customElement('mdui-icon-line-axis--outlined')
], IconLineAxis_Outlined);
export { IconLineAxis_Outlined };