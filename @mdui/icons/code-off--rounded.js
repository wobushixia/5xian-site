import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCodeOff_Rounded = class IconCodeOff_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m19.17 12-3.88-3.88a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41l-2.88 2.88L17 14.17 19.17 12zM2.1 4.93l3.49 3.49-2.88 2.88a.996.996 0 0 0 0 1.41L7.3 17.3a.996.996 0 1 0 1.41-1.41L4.83 12 7 9.83 19.07 21.9a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42z"/>');
    }
};
IconCodeOff_Rounded.styles = style;
IconCodeOff_Rounded = __decorate([
    customElement('mdui-icon-code-off--rounded')
], IconCodeOff_Rounded);
export { IconCodeOff_Rounded };