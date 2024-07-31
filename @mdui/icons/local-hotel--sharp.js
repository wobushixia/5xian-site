import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLocalHotel_Sharp = class IconLocalHotel_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm16-6H11v7H3V5H1v15h2v-3h18v3h2V7z"/>');
    }
};
IconLocalHotel_Sharp.styles = style;
IconLocalHotel_Sharp = __decorate([
    customElement('mdui-icon-local-hotel--sharp')
], IconLocalHotel_Sharp);
export { IconLocalHotel_Sharp };