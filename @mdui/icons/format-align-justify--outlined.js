import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignJustify_Outlined = class IconFormatAlignJustify_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>');
    }
};
IconFormatAlignJustify_Outlined.styles = style;
IconFormatAlignJustify_Outlined = __decorate([
    customElement('mdui-icon-format-align-justify--outlined')
], IconFormatAlignJustify_Outlined);
export { IconFormatAlignJustify_Outlined };