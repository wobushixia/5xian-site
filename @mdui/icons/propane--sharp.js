import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPropane_Sharp = class IconPropane_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M16.75 6H16V3H8v3h-.75C3.97 6 1.1 8.53 1 11.82A6.001 6.001 0 0 0 7 18v3h2v-3h6v3h2v-3c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6zM10 5h4v1h-4V5z"/>');
    }
};
IconPropane_Sharp.styles = style;
IconPropane_Sharp = __decorate([
    customElement('mdui-icon-propane--sharp')
], IconPropane_Sharp);
export { IconPropane_Sharp };
