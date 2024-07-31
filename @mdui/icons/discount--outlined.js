import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDiscount_Outlined = class IconDiscount_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12.79 21 3 11.21v2c0 .53.21 1.04.59 1.41l7.79 7.79c.78.78 2.05.78 2.83 0l6.21-6.21c.78-.78.78-2.05 0-2.83L12.79 21z"/><path d="M11.38 17.41c.39.39.9.59 1.41.59.51 0 1.02-.2 1.41-.59l6.21-6.21c.78-.78.78-2.05 0-2.83L12.62.58C12.25.21 11.74 0 11.21 0H5C3.9 0 3 .9 3 2v6.21c0 .53.21 1.04.59 1.41l7.79 7.79zM5 2h6.21L19 9.79 12.79 16 5 8.21V2z"/><circle cx="7.25" cy="4.25" r="1.25"/>');
    }
};
IconDiscount_Outlined.styles = style;
IconDiscount_Outlined = __decorate([
    customElement('mdui-icon-discount--outlined')
], IconDiscount_Outlined);
export { IconDiscount_Outlined };