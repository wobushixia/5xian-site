import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLaptop_TwoTone = class IconLaptop_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 6h16v10H4V6z" opacity=".3"/><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/>');
    }
};
IconLaptop_TwoTone.styles = style;
IconLaptop_TwoTone = __decorate([
    customElement('mdui-icon-laptop--two-tone')
], IconLaptop_TwoTone);
export { IconLaptop_TwoTone };
