import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCrisisAlert = class IconCrisisAlert extends LitElement {
    render() {
        return svgTag('<path d="M14.5 2.5c0 1.5-1.5 6-1.5 6h-2S9.5 4 9.5 2.5a2.5 2.5 0 0 1 5 0zM12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm4.08-4.89c.18-.75.33-1.47.39-2.06A9.996 9.996 0 0 1 22 12c0 5.52-4.48 10-10 10S2 17.52 2 12c0-3.92 2.25-7.31 5.53-8.95.07.59.21 1.32.39 2.06A8.028 8.028 0 0 0 4 12c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.93-1.58-5.49-3.92-6.89zM18 12c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2 .98-3.77 2.48-4.86.23.81.65 2.07.65 2.07C8.43 9.93 8 10.92 8 12c0 2.21 1.79 4 4 4s4-1.79 4-4c0-1.08-.43-2.07-1.13-2.79 0 0 .41-1.22.65-2.07A5.998 5.998 0 0 1 18 12z"/>');
    }
};
IconCrisisAlert.styles = style;
IconCrisisAlert = __decorate([
    customElement('mdui-icon-crisis-alert')
], IconCrisisAlert);
export { IconCrisisAlert };
