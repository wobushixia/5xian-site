import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconListAlt_TwoTone = class IconListAlt_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h14V5H5v14zm6-12h6v2h-6V7zm0 4h6v2h-6v-2zm0 4h6v2h-6v-2zM7 7h2v2H7V7zm0 4h2v2H7v-2zm0 4h2v2H7v-2z" opacity=".3"/><path d="M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"/>');
    }
};
IconListAlt_TwoTone.styles = style;
IconListAlt_TwoTone = __decorate([
    customElement('mdui-icon-list-alt--two-tone')
], IconListAlt_TwoTone);
export { IconListAlt_TwoTone };
