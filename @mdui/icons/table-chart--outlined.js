import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableChart_Outlined = class IconTableChart_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 2v3H5V5h15zm-5 14h-5v-9h5v9zM5 10h3v9H5v-9zm12 9v-9h3v9h-3z"/>');
    }
};
IconTableChart_Outlined.styles = style;
IconTableChart_Outlined = __decorate([
    customElement('mdui-icon-table-chart--outlined')
], IconTableChart_Outlined);
export { IconTableChart_Outlined };