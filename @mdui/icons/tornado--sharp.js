import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTornado_Sharp = class IconTornado_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M20.11 8 23 3H1l2.89 5zM7.95 15 12 22l4.05-7zm11-5H5.05l1.74 3h10.42z"/>');
    }
};
IconTornado_Sharp.styles = style;
IconTornado_Sharp = __decorate([
    customElement('mdui-icon-tornado--sharp')
], IconTornado_Sharp);
export { IconTornado_Sharp };