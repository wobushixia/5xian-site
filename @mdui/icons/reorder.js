import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReorder = class IconReorder extends LitElement {
    render() {
        return svgTag('<path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>');
    }
};
IconReorder.styles = style;
IconReorder = __decorate([
    customElement('mdui-icon-reorder')
], IconReorder);
export { IconReorder };
