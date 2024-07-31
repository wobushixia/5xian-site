import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddChart_Outlined = class IconAddChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 19H5V5h9V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-9h-2v9z"/><path d="M15 13h2v4h-2zm-8-3h2v7H7zm4-3h2v10h-2zm8-2V3h-2v2h-2v2h2v2h2V7h2V5z"/>');
    }
};
IconAddChart_Outlined.styles = style;
IconAddChart_Outlined = __decorate([
    customElement('mdui-icon-add-chart--outlined')
], IconAddChart_Outlined);
export { IconAddChart_Outlined };
