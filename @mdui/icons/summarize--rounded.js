import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSummarize_Rounded = class IconSummarize_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M15.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2H19c1.1 0 2-.9 2-2V9.83c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM8 17c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm6 0V4.5l5.5 5.5H15c-.55 0-1-.45-1-1z"/>');
    }
};
IconSummarize_Rounded.styles = style;
IconSummarize_Rounded = __decorate([
    customElement('mdui-icon-summarize--rounded')
], IconSummarize_Rounded);
export { IconSummarize_Rounded };
