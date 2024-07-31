import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHardware_Rounded = class IconHardware_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17.59 3.41 15 6V5c0-1.1-.9-2-2-2H9C6.24 3 4 5.24 4 8h5v3h6V8l2.59 2.59c.26.26.62.41 1 .41h.01c.77 0 1.4-.63 1.4-1.41V4.41C20 3.63 19.37 3 18.59 3h-.01c-.37 0-.73.15-.99.41zM9 13v7c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-7H9z"/>');
    }
};
IconHardware_Rounded.styles = style;
IconHardware_Rounded = __decorate([
    customElement('mdui-icon-hardware--rounded')
], IconHardware_Rounded);
export { IconHardware_Rounded };