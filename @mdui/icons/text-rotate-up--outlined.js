import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTextRotateUp_Outlined = class IconTextRotateUp_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m18 4-3 3h2v13h2V7h2l-3-3zm-6.2 11.5v-5l2.2-.9V7.5L3 12.25v1.5l11 4.75v-2.1l-2.2-.9zM4.98 13 10 11.13v3.74L4.98 13z"/>');
    }
};
IconTextRotateUp_Outlined.styles = style;
IconTextRotateUp_Outlined = __decorate([
    customElement('mdui-icon-text-rotate-up--outlined')
], IconTextRotateUp_Outlined);
export { IconTextRotateUp_Outlined };
