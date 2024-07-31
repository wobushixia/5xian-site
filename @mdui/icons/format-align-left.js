import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFormatAlignLeft = class IconFormatAlignLeft extends LitElement {
    render() {
        return svgTag('<path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/>');
    }
};
IconFormatAlignLeft.styles = style;
IconFormatAlignLeft = __decorate([
    customElement('mdui-icon-format-align-left')
], IconFormatAlignLeft);
export { IconFormatAlignLeft };
