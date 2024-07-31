import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWrapText_Outlined = class IconWrapText_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3 3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"/>');
    }
};
IconWrapText_Outlined.styles = style;
IconWrapText_Outlined = __decorate([
    customElement('mdui-icon-wrap-text--outlined')
], IconWrapText_Outlined);
export { IconWrapText_Outlined };