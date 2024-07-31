import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMarkUnreadChatAlt_Outlined = class IconMarkUnreadChatAlt_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 16H4V4h10.1a5 5 0 0 1 0-2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V6.98c-.58.44-1.26.77-2 .92V16z"/><circle cx="19" cy="3" r="3"/><path d="M6 12h8v2H6zm0-3h12v2H6zm0-1h12v-.1A5.013 5.013 0 0 1 15.03 6H6v2z"/>');
    }
};
IconMarkUnreadChatAlt_Outlined.styles = style;
IconMarkUnreadChatAlt_Outlined = __decorate([
    customElement('mdui-icon-mark-unread-chat-alt--outlined')
], IconMarkUnreadChatAlt_Outlined);
export { IconMarkUnreadChatAlt_Outlined };
