import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewStream = class IconViewStream extends LitElement {
    render() {
        return svgTag('<path d="M3 17v-2c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2zM3 7v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2z"/>');
    }
};
IconViewStream.styles = style;
IconViewStream = __decorate([
    customElement('mdui-icon-view-stream')
], IconViewStream);
export { IconViewStream };