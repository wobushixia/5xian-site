import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalSplit = class IconVerticalSplit extends LitElement {
    render() {
        return svgTag('<path d="M3 15h8v-2H3v2zm0 4h8v-2H3v2zm0-8h8V9H3v2zm0-6v2h8V5H3zm10 0h8v14h-8V5z"/>');
    }
};
IconVerticalSplit.styles = style;
IconVerticalSplit = __decorate([
    customElement('mdui-icon-vertical-split')
], IconVerticalSplit);
export { IconVerticalSplit };
