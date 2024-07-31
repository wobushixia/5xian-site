import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwapHorizontalCircle_Sharp = class IconSwapHorizontalCircle_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5 3.5 3.5-3.5 3.5V11h-4V9h4V6.5zm-6 11L5.5 14 9 10.5V13h4v2H9v2.5z"/>');
    }
};
IconSwapHorizontalCircle_Sharp.styles = style;
IconSwapHorizontalCircle_Sharp = __decorate([
    customElement('mdui-icon-swap-horizontal-circle--sharp')
], IconSwapHorizontalCircle_Sharp);
export { IconSwapHorizontalCircle_Sharp };
