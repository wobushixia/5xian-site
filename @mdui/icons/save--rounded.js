import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSave_Rounded = class IconSave_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-2.82-2.83zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z"/>');
    }
};
IconSave_Rounded.styles = style;
IconSave_Rounded = __decorate([
    customElement('mdui-icon-save--rounded')
], IconSave_Rounded);
export { IconSave_Rounded };
