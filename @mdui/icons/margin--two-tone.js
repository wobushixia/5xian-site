import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMargin_TwoTone = class IconMargin_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zM15 7h2v2h-2V7zm0 4h2v2h-2v-2zm-4-4h2v2h-2V7zm0 4h2v2h-2v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2z" opacity=".3"/><path d="M7 7h2v2H7zm0 4h2v2H7z"/><path d="M3 3v18h18V3H3zm16 16H5V5h14v14z"/><path d="M11 7h2v2h-2zm4 4h2v2h-2zm-4 0h2v2h-2zm4-4h2v2h-2z"/>');
    }
};
IconMargin_TwoTone.styles = style;
IconMargin_TwoTone = __decorate([
    customElement('mdui-icon-margin--two-tone')
], IconMargin_TwoTone);
export { IconMargin_TwoTone };
