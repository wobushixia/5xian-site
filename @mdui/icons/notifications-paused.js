import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNotificationsPaused = class IconNotificationsPaused extends LitElement {
    render() {
        return svgTag('<path d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.93 6 11v5l-2 2v1h16v-1l-2-2zm-3.5-6.2-2.8 3.4h2.8V15h-5v-1.8l2.8-3.4H9.5V8h5v1.8z"/>');
    }
};
IconNotificationsPaused.styles = style;
IconNotificationsPaused = __decorate([
    customElement('mdui-icon-notifications-paused')
], IconNotificationsPaused);
export { IconNotificationsPaused };
