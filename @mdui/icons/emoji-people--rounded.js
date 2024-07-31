import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEmojiPeople_Rounded = class IconEmojiPeople_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="4" r="2"/><path d="M15.89 8.11C15.5 7.72 14.83 7 13.53 7h-2.54a5.023 5.023 0 0 1-4.92-4.15.998.998 0 0 0-.98-.85c-.61 0-1.09.54-1 1.14A7.037 7.037 0 0 0 9 8.71V21c0 .55.45 1 1 1s1-.45 1-1v-5h2v5c0 .55.45 1 1 1s1-.45 1-1V10.05l3.24 3.24a.996.996 0 1 0 1.41-1.41l-3.76-3.77z"/>');
    }
};
IconEmojiPeople_Rounded.styles = style;
IconEmojiPeople_Rounded = __decorate([
    customElement('mdui-icon-emoji-people--rounded')
], IconEmojiPeople_Rounded);
export { IconEmojiPeople_Rounded };
