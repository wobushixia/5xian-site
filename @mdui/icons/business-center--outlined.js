import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBusinessCenter_Outlined = class IconBusinessCenter_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zM4 9h16v5h-5v-3H9v3H4V9zm9 6h-2v-2h2v2zm6 4H5v-3h4v1h6v-1h4v3z"/>');
    }
};
IconBusinessCenter_Outlined.styles = style;
IconBusinessCenter_Outlined = __decorate([
    customElement('mdui-icon-business-center--outlined')
], IconBusinessCenter_Outlined);
export { IconBusinessCenter_Outlined };
