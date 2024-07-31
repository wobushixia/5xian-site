import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPinEnd_Sharp = class IconPinEnd_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20 12V6H4v12h10v2H2V4h20v8h-2zm-1 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4.34-6H9v5.66l2.12-2.12 2.83 2.83 1.41-1.41-2.83-2.83L14.66 8z"/>');
    }
};
IconPinEnd_Sharp.styles = style;
IconPinEnd_Sharp = __decorate([
    customElement('mdui-icon-pin-end--sharp')
], IconPinEnd_Sharp);
export { IconPinEnd_Sharp };