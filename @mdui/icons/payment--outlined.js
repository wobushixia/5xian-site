import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPayment_Outlined = class IconPayment_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>');
    }
};
IconPayment_Outlined.styles = style;
IconPayment_Outlined = __decorate([
    customElement('mdui-icon-payment--outlined')
], IconPayment_Outlined);
export { IconPayment_Outlined };
