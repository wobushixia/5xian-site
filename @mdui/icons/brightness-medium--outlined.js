import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrightnessMedium_Outlined = class IconBrightnessMedium_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zm-2 5.79V18h-3.52L12 20.48 9.52 18H6v-3.52L3.52 12 6 9.52V6h3.52L12 3.52 14.48 6H18v3.52L20.48 12 18 14.48zM12 6v12c3.31 0 6-2.69 6-6s-2.69-6-6-6z"/>');
    }
};
IconBrightnessMedium_Outlined.styles = style;
IconBrightnessMedium_Outlined = __decorate([
    customElement('mdui-icon-brightness-medium--outlined')
], IconBrightnessMedium_Outlined);
export { IconBrightnessMedium_Outlined };