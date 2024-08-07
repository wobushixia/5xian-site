import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassTop = class IconHourglassTop extends LitElement {
    render() {
        return svgTag('<path d="m6 2 .01 6L10 12l-3.99 4.01L6 22h12v-6l-4-4 4-3.99V2H6zm10 14.5V20H8v-3.5l4-4 4 4z"/>');
    }
};
IconHourglassTop.styles = style;
IconHourglassTop = __decorate([
    customElement('mdui-icon-hourglass-top')
], IconHourglassTop);
export { IconHourglassTop };
