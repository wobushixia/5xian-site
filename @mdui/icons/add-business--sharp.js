import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddBusiness_Sharp = class IconAddBusiness_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M15 17h2v-3h1v-2l-1-5H2l-1 5v2h1v6h9v-6h4v3zm-6 1H4v-4h5v4zM2 4h15v2H2z"/><path d="M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"/>');
    }
};
IconAddBusiness_Sharp.styles = style;
IconAddBusiness_Sharp = __decorate([
    customElement('mdui-icon-add-business--sharp')
], IconAddBusiness_Sharp);
export { IconAddBusiness_Sharp };
