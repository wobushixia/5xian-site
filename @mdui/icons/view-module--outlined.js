import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewModule_Outlined = class IconViewModule_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M3 5v14h18V5H3zm16 6h-3.33V7H19v4zm-5.33 0h-3.33V7h3.33v4zM8.33 7v4H5V7h3.33zM5 17v-4h3.33v4H5zm5.33 0v-4h3.33v4h-3.33zm5.34 0v-4H19v4h-3.33z"/>');
    }
};
IconViewModule_Outlined.styles = style;
IconViewModule_Outlined = __decorate([
    customElement('mdui-icon-view-module--outlined')
], IconViewModule_Outlined);
export { IconViewModule_Outlined };
