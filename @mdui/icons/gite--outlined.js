import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGite_Outlined = class IconGite_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18 6H9V4H7v2H6l-4 4v9h20v-9l-4-4zM4 12h10v5H4v-5zm16 5h-4v-6.17l2-2 2 2V17z"/>');
    }
};
IconGite_Outlined.styles = style;
IconGite_Outlined = __decorate([
    customElement('mdui-icon-gite--outlined')
], IconGite_Outlined);
export { IconGite_Outlined };