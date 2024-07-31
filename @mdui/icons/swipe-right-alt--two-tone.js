import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeRightAlt_TwoTone = class IconSwipeRightAlt_TwoTone extends LitElement {
    render() {
        return svgTag('<circle cx="9" cy="12" r="3" opacity=".3"/><path d="M13.9 11a5 5 0 1 0 0 2h4.27l-1.59 1.59L18 16l4-4-4-4-1.41 1.41L18.17 11H13.9zM9 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"/>');
    }
};
IconSwipeRightAlt_TwoTone.styles = style;
IconSwipeRightAlt_TwoTone = __decorate([
    customElement('mdui-icon-swipe-right-alt--two-tone')
], IconSwipeRightAlt_TwoTone);
export { IconSwipeRightAlt_TwoTone };