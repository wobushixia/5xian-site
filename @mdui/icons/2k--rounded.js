import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon2k_Rounded = class Icon2k_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9.5H8v1h2.25c.41 0 .75.34.75.75s-.34.75-.75.75H7.5c-.55 0-1-.45-1-1v-1.5c0-.55.45-1 1-1h2v-1H7.25c-.41 0-.75-.34-.75-.75S6.84 9 7.25 9H10c.55 0 1 .45 1 1v1.5c0 .55-.45 1-1 1zm6.59 2.5c-.22 0-.42-.1-.55-.27l-1.54-1.98v1.55c0 .39-.31.7-.7.7h-.1c-.39 0-.7-.31-.7-.7V9.7c0-.39.31-.7.7-.7h.09c.39 0 .7.31.7.7v1.55l1.54-1.98c.14-.17.35-.27.56-.27.58 0 .91.66.56 1.12L15.75 12l1.41 1.88c.34.46.01 1.12-.57 1.12z"/>');
    }
};
Icon2k_Rounded.styles = style;
Icon2k_Rounded = __decorate([
    customElement('mdui-icon-2k--rounded')
], Icon2k_Rounded);
export { Icon2k_Rounded };
