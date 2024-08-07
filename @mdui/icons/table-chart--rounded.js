import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTableChart_Rounded = class IconTableChart_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M10 10.02h5V21h-5V10.02zM17 21h3c1.1 0 2-.9 2-2v-9h-5v11zm3-18H5c-1.1 0-2 .9-2 2v3h19V5c0-1.1-.9-2-2-2zM3 19c0 1.1.9 2 2 2h3V10H3v9z"/>');
    }
};
IconTableChart_Rounded.styles = style;
IconTableChart_Rounded = __decorate([
    customElement('mdui-icon-table-chart--rounded')
], IconTableChart_Rounded);
export { IconTableChart_Rounded };
