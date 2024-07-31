import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableRows_Sharp = class IconTableRows_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 8H3V4h18v4zm0 2H3v4h18v-4zm0 6H3v4h18v-4z"/>');
    }
};
IconTableRows_Sharp.styles = style;
IconTableRows_Sharp = __decorate([
    customElement('mdui-icon-table-rows--sharp')
], IconTableRows_Sharp);
export { IconTableRows_Sharp };