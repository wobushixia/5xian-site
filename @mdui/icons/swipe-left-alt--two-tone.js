import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeLeftAlt_TwoTone = class IconSwipeLeftAlt_TwoTone extends LitElement {
    render() {
        return svgTag('<circle cx="15" cy="12" r="3" opacity=".3"/><path d="M10.1 13a5 5 0 1 0 0-2H5.83l1.59-1.59L6 8l-4 4 4 4 1.41-1.41L5.83 13h4.27zm4.9 2c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/>');
    }
};
IconSwipeLeftAlt_TwoTone.styles = style;
IconSwipeLeftAlt_TwoTone = __decorate([
    customElement('mdui-icon-swipe-left-alt--two-tone')
], IconSwipeLeftAlt_TwoTone);
export { IconSwipeLeftAlt_TwoTone };
