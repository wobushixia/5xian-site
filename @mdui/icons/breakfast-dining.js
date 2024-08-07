import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBreakfastDining = class IconBreakfastDining extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M18 3H6C3.79 3 2 4.79 2 7c0 1.48.81 2.75 2 3.45V19c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-8.55c1.19-.69 2-1.97 2-3.45 0-2.21-1.79-4-4-4zm-4 12h-4v-4h4v4z"/>');
    }
};
IconBreakfastDining.styles = style;
IconBreakfastDining = __decorate([
    customElement('mdui-icon-breakfast-dining')
], IconBreakfastDining);
export { IconBreakfastDining };
