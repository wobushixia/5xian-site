import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertPageBreak_TwoTone = class IconInsertPageBreak_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M18 11H6V4h7v5h5z" opacity=".3"/><path d="M18 20H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2v3zM6 4h7v5h5v2h2V8l-6-6H6c-1.1 0-2 .9-2 2v7h2V4zm3 9h6v2H9zm8 0h6v2h-6zM1 13h6v2H1z"/><path d="M6 17h12v3H6z" opacity=".3"/>');
    }
};
IconInsertPageBreak_TwoTone.styles = style;
IconInsertPageBreak_TwoTone = __decorate([
    customElement('mdui-icon-insert-page-break--two-tone')
], IconInsertPageBreak_TwoTone);
export { IconInsertPageBreak_TwoTone };
