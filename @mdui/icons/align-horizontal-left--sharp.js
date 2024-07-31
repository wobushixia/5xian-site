import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAlignHorizontalLeft_Sharp = class IconAlignHorizontalLeft_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M4 22H2V2h2v20zM22 7H6v3h16V7zm-6 7H6v3h10v-3z"/>');
    }
};
IconAlignHorizontalLeft_Sharp.styles = style;
IconAlignHorizontalLeft_Sharp = __decorate([
    customElement('mdui-icon-align-horizontal-left--sharp')
], IconAlignHorizontalLeft_Sharp);
export { IconAlignHorizontalLeft_Sharp };
