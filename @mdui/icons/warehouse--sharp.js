import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWarehouse_Sharp = class IconWarehouse_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 21V7L12 3 2 7v14h5v-9h10v9h5zm-11-2H9v2h2v-2zm2-3h-2v2h2v-2zm2 3h-2v2h2v-2z"/>');
    }
};
IconWarehouse_Sharp.styles = style;
IconWarehouse_Sharp = __decorate([
    customElement('mdui-icon-warehouse--sharp')
], IconWarehouse_Sharp);
export { IconWarehouse_Sharp };
