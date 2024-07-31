import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconShop_Sharp = class IconShop_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v15h20V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"/>');
    }
};
IconShop_Sharp.styles = style;
IconShop_Sharp = __decorate([
    customElement('mdui-icon-shop--sharp')
], IconShop_Sharp);
export { IconShop_Sharp };
