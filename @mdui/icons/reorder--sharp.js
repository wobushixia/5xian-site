import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReorder_Sharp = class IconReorder_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"/>');
    }
};
IconReorder_Sharp.styles = style;
IconReorder_Sharp = __decorate([
    customElement('mdui-icon-reorder--sharp')
], IconReorder_Sharp);
export { IconReorder_Sharp };
