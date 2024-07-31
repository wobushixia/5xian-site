import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewSidebar = class IconViewSidebar extends LitElement {
    render() {
        return svgTag('<path d="M16 20H2V4h14v16zm2-12h4V4h-4v4zm0 12h4v-4h-4v4zm0-6h4v-4h-4v4z"/>');
    }
};
IconViewSidebar.styles = style;
IconViewSidebar = __decorate([
    customElement('mdui-icon-view-sidebar')
], IconViewSidebar);
export { IconViewSidebar };