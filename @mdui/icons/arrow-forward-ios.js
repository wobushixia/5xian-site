import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowForwardIos = class IconArrowForwardIos extends LitElement {
    render() {
        return svgTag('<path d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"/>');
    }
};
IconArrowForwardIos.styles = style;
IconArrowForwardIos = __decorate([
    customElement('mdui-icon-arrow-forward-ios')
], IconArrowForwardIos);
export { IconArrowForwardIos };
