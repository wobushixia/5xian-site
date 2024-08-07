import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTakeoutDining = class IconTakeoutDining extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M5.26 11h13.48l-.67 9H5.93l-.67-9zm3.76-7h5.95L19 7.38l1.59-1.59L22 7.21 19.21 10H4.79L2 7.21 3.41 5.8 5 7.38 9.02 4z"/>');
    }
};
IconTakeoutDining.styles = style;
IconTakeoutDining = __decorate([
    customElement('mdui-icon-takeout-dining')
], IconTakeoutDining);
export { IconTakeoutDining };
