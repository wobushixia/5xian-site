import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHighlight_TwoTone = class IconHighlight_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 20h2v-3.83l3-3V11H8v2.17l3 3z" opacity=".3"/><path d="m6 14 3 3v5h6v-5l3-3V9H6v5zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3V11zm3-9h2v3h-2zM4.916 4.464l2.12 2.122L5.62 8 3.5 5.877zM18.372 8l-1.414-1.414 2.12-2.12 1.415 1.413z"/>');
    }
};
IconHighlight_TwoTone.styles = style;
IconHighlight_TwoTone = __decorate([
    customElement('mdui-icon-highlight--two-tone')
], IconHighlight_TwoTone);
export { IconHighlight_TwoTone };