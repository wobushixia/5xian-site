import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFiberPin_TwoTone = class IconFiberPin_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 14.62h1.31v-1.75h1.75c.74 0 1.31-.57 1.31-1.31v-.88c0-.74-.57-1.31-1.31-1.31H5v5.25zm1.31-3.93h1.75v.88H6.31v-.88zm5.03-1.31h1.31v5.25h-1.31zm3.28 5.24h1.1v-3.06l2.23 3.06H19V9.38h-1.09v3.06l-2.19-3.06h-1.1z"/><path d="M4 6h16v12H4z" opacity=".3"/><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V6h16v12z"/>');
    }
};
IconFiberPin_TwoTone.styles = style;
IconFiberPin_TwoTone = __decorate([
    customElement('mdui-icon-fiber-pin--two-tone')
], IconFiberPin_TwoTone);
export { IconFiberPin_TwoTone };