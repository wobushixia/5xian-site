import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignJustify = class IconFormatAlignJustify extends LitElement {
    render() {
        return svgTag('<path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/>');
    }
};
IconFormatAlignJustify.styles = style;
IconFormatAlignJustify = __decorate([
    customElement('mdui-icon-format-align-justify')
], IconFormatAlignJustify);
export { IconFormatAlignJustify };