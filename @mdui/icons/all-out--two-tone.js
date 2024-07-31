import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAllOut_TwoTone = class IconAllOut_TwoTone extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="5" opacity=".3"/><path d="M4 4v4l4-4zm12 0 4 4V4zm4 16v-4l-4 4zM4 20h4l-4-4zm15-8c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7 7-3.13 7-7zm-7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>');
    }
};
IconAllOut_TwoTone.styles = style;
IconAllOut_TwoTone = __decorate([
    customElement('mdui-icon-all-out--two-tone')
], IconAllOut_TwoTone);
export { IconAllOut_TwoTone };
