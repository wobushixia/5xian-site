import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNetworkCell = class IconNetworkCell extends LitElement {
    render() {
        return svgTag('<path d="M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z"/>');
    }
};
IconNetworkCell.styles = style;
IconNetworkCell = __decorate([
    customElement('mdui-icon-network-cell')
], IconNetworkCell);
export { IconNetworkCell };
