import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMailLock_TwoTone = class IconMailLock_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M20 6H4l8 5z" opacity=".3"/><path d="M12 13 4 8v10h12v-3.03a5 5 0 0 1 4-4.9V8l-8 5z" opacity=".3"/><path d="M4 18V8l8 5 8-5v2.08c.32-.07.66-.1 1-.1h1V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h12v-2H4zM20 6l-8 5-8-5h16z"/><path d="M23 15v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zm-3 0v-1c0-.55.45-1 1-1s1 .45 1 1v1h-2z"/>');
    }
};
IconMailLock_TwoTone.styles = style;
IconMailLock_TwoTone = __decorate([
    customElement('mdui-icon-mail-lock--two-tone')
], IconMailLock_TwoTone);
export { IconMailLock_TwoTone };
