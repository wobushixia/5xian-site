import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSwipeVertical = class IconSwipeVertical extends LitElement {
    render() {
        return svgTag('<path d="M1 3.5h2.02C1.13 5.82 0 8.78 0 12s1.13 6.18 3.02 8.5H1V22h5v-5H4.5v2.91c-1.86-2.11-3-4.88-3-7.91s1.14-5.79 3-7.91V7H6V2H1v1.5zm12.85 8.12-2.68-5.37a1.498 1.498 0 0 0-2.01-.67c-.75.38-1.05 1.28-.68 2.02l4.81 9.6-3.24.8c-.33.09-.59.33-.7.66L9 19.78l6.19 2.25c.5.17 1.28.02 1.75-.22l5.51-2.75c.89-.45 1.32-1.48 1-2.42l-1.43-4.27a2 2 0 0 0-1.9-1.37h-4.56c-.31 0-.62.07-.89.21l-.82.41"/>');
    }
};
IconSwipeVertical.styles = style;
IconSwipeVertical = __decorate([
    customElement('mdui-icon-swipe-vertical')
], IconSwipeVertical);
export { IconSwipeVertical };
