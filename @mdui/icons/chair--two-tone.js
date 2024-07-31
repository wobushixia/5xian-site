import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconChair_TwoTone = class IconChair_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 13h10v-2c0-.88.39-1.67 1-2.22V6c0-.55-.45-1-1-1H7c-.55 0-1 .45-1 1v2.78c.61.55 1 1.34 1 2.22v2z" opacity=".3"/><path d="M20 10c-.55 0-1 .45-1 1v4H5v-4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z" opacity=".3"/><path d="M20 8V6c0-1.65-1.35-3-3-3H7C5.35 3 4 4.35 4 6v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3v1c0 .55.45 1 1 1s1-.45 1-1v-1h12v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM6 6c0-.55.45-1 1-1h10c.55 0 1 .45 1 1v2.78c-.61.55-1 1.34-1 2.22v2H7v-2c0-.88-.39-1.67-1-2.22V6zm15 10c0 .55-.45 1-1 1H4c-.55 0-1-.45-1-1v-5c0-.55.45-1 1-1s1 .45 1 1v4h14v-4c0-.55.45-1 1-1s1 .45 1 1v5z"/>');
    }
};
IconChair_TwoTone.styles = style;
IconChair_TwoTone = __decorate([
    customElement('mdui-icon-chair--two-tone')
], IconChair_TwoTone);
export { IconChair_TwoTone };