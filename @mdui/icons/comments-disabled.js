import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCommentsDisabled = class IconCommentsDisabled extends LitElement {
    render() {
        return svgTag('<path d="M16.83 14H18v-2h-3.17l-1-1H18V9h-6.17l-1-1H18V6H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17L16.83 14zM2.1 2.1.69 3.51 2 4.83V16c0 1.1.9 2 2 2h11.17l5.31 5.31 1.41-1.41L2.1 2.1zM6 9h.17l2 2H6V9zm0 5v-2h3.17l2 2H6z"/>');
    }
};
IconCommentsDisabled.styles = style;
IconCommentsDisabled = __decorate([
    customElement('mdui-icon-comments-disabled')
], IconCommentsDisabled);
export { IconCommentsDisabled };
