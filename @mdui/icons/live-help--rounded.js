import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLiveHelp_Rounded = class IconLiveHelp_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h4l2.29 2.29c.39.39 1.02.39 1.41 0L15 20h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 16h-2v-2h2v2zm2.07-7.75-.9.92c-.58.59-.99 1.1-1.12 2.06-.06.43-.41.76-.85.76h-.31a.86.86 0 0 1-.85-.98c.11-.91.53-1.72 1.14-2.34l1.24-1.26c.36-.36.58-.86.58-1.41 0-1.1-.9-2-2-2-.87 0-1.62.57-1.89 1.35-.13.37-.44.64-.83.64h-.3c-.58 0-.98-.56-.82-1.12A4.002 4.002 0 0 1 16 8c0 .88-.36 1.68-.93 2.25z"/>');
    }
};
IconLiveHelp_Rounded.styles = style;
IconLiveHelp_Rounded = __decorate([
    customElement('mdui-icon-live-help--rounded')
], IconLiveHelp_Rounded);
export { IconLiveHelp_Rounded };