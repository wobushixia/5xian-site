import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowForward = class IconArrowForward extends LitElement {
    render() {
        return svgTag('<path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>');
    }
};
IconArrowForward.styles = style;
IconArrowForward = __decorate([
    customElement('mdui-icon-arrow-forward')
], IconArrowForward);
export { IconArrowForward };
