import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRule_Rounded = class IconRule_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m15.83 10.29-2.12-2.12a.996.996 0 1 1 1.41-1.41l1.41 1.41 3.54-3.54a.996.996 0 1 1 1.41 1.41l-4.24 4.24c-.39.4-1.02.4-1.41.01zM10 7H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1zm10.29 5.71a.996.996 0 0 0-1.41 0L17 14.59l-1.88-1.88a.996.996 0 1 0-1.41 1.41L15.59 16l-1.88 1.88a.996.996 0 1 0 1.41 1.41L17 17.41l1.88 1.88a.996.996 0 1 0 1.41-1.41L18.41 16l1.88-1.88a.996.996 0 0 0 0-1.41zM10 15H3c-.55 0-1 .45-1 1s.45 1 1 1h7c.55 0 1-.45 1-1s-.45-1-1-1z"/>');
    }
};
IconRule_Rounded.styles = style;
IconRule_Rounded = __decorate([
    customElement('mdui-icon-rule--rounded')
], IconRule_Rounded);
export { IconRule_Rounded };
