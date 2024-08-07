import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNfc_Sharp = class IconNfc_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 2H2v20h20V2zm-2 18H4V4h16v16zM18 6h-7v4.28c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V8h3v8H8V8h2V6H6v12h12V6z"/>');
    }
};
IconNfc_Sharp.styles = style;
IconNfc_Sharp = __decorate([
    customElement('mdui-icon-nfc--sharp')
], IconNfc_Sharp);
export { IconNfc_Sharp };
