import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPropane_Rounded = class IconPropane_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M16.75 6H16V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1h-.75C3.97 6 1.1 8.53 1 11.82A6.001 6.001 0 0 0 7 18v2c0 .55.45 1 1 1s1-.45 1-1v-2h6v2c0 .55.45 1 1 1s1-.45 1-1v-2c3.38 0 6.1-2.79 6-6.18C22.9 8.53 20.03 6 16.75 6zM10 5h4v1h-4V5z"/>');
    }
};
IconPropane_Rounded.styles = style;
IconPropane_Rounded = __decorate([
    customElement('mdui-icon-propane--rounded')
], IconPropane_Rounded);
export { IconPropane_Rounded };
