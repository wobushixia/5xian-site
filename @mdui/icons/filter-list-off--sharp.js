import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterListOff_Sharp = class IconFilterListOff_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10.83 8H21V6H8.83l2 2zm5 5H18v-2h-4.17l2 2zM14 16.83V18h-4v-2h3.17l-3-3H6v-2h2.17l-3-3H3V6h.17L1.39 4.22 2.8 2.81l18.38 18.38-1.41 1.41L14 16.83z"/>');
    }
};
IconFilterListOff_Sharp.styles = style;
IconFilterListOff_Sharp = __decorate([
    customElement('mdui-icon-filter-list-off--sharp')
], IconFilterListOff_Sharp);
export { IconFilterListOff_Sharp };
