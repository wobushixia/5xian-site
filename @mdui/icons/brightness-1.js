import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBrightness_1 = class IconBrightness_1 extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="12" r="10"/>');
    }
};
IconBrightness_1.styles = style;
IconBrightness_1 = __decorate([
    customElement('mdui-icon-brightness-1')
], IconBrightness_1);
export { IconBrightness_1 };