import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRollerShades_Outlined = class IconRollerShades_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 19V3H4v16H2v2h20v-2h-2zM18 5v6H6V5h12zM6 19v-6h5v1.82A1.746 1.746 0 0 0 12 18a1.746 1.746 0 0 0 1-3.18V13h5v6H6z"/>');
    }
};
IconRollerShades_Outlined.styles = style;
IconRollerShades_Outlined = __decorate([
    customElement('mdui-icon-roller-shades--outlined')
], IconRollerShades_Outlined);
export { IconRollerShades_Outlined };
