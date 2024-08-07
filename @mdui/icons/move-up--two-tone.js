import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMoveUp_TwoTone = class IconMoveUp_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 15h5v3h-5z" opacity=".3"/><path d="M3 13c0-2.45 1.76-4.47 4.08-4.91l-1.49 1.5L7 11l4-4.01L7 3 5.59 4.41l1.58 1.58v.06A7.007 7.007 0 0 0 1 13c0 3.87 3.13 7 7 7h3v-2H8c-2.76 0-5-2.24-5-5zm10 0v7h9v-7h-9zm7 5h-5v-3h5v3zM13 4h9v7h-9z"/>');
    }
};
IconMoveUp_TwoTone.styles = style;
IconMoveUp_TwoTone = __decorate([
    customElement('mdui-icon-move-up--two-tone')
], IconMoveUp_TwoTone);
export { IconMoveUp_TwoTone };
