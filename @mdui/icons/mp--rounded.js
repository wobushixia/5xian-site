import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMp_Rounded = class IconMp_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7 9h4.5c.55 0 1 .45 1 1v4.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-1v2.25c0 .41-.34.75-.75.75s-.75-.34-.75-.75V10.5h-1v3.75c0 .41-.34.75-.75.75S6 14.66 6 14.25V10c0-.55.45-1 1-1zm7.25 6c-.41 0-.75-.33-.75-.75V10c0-.55.45-1 1-1H17c.55 0 1 .45 1 1v2.5c0 .55-.45 1-1 1h-2v.75c0 .41-.34.75-.75.75zm.75-3h1.5v-1.5H15V12z"/>');
    }
};
IconMp_Rounded.styles = style;
IconMp_Rounded = __decorate([
    customElement('mdui-icon-mp--rounded')
], IconMp_Rounded);
export { IconMp_Rounded };
