import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHourglassBottom_Outlined = class IconHourglassBottom_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m18 22-.01-6L14 12l3.99-4.01L18 2H6v6l4 4-4 3.99V22h12zM8 7.5V4h8v3.5l-4 4-4-4z"/>');
    }
};
IconHourglassBottom_Outlined.styles = style;
IconHourglassBottom_Outlined = __decorate([
    customElement('mdui-icon-hourglass-bottom--outlined')
], IconHourglassBottom_Outlined);
export { IconHourglassBottom_Outlined };
