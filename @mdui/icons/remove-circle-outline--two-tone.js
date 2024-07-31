import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRemoveCircleOutline_TwoTone = class IconRemoveCircleOutline_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 11h10v2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>');
    }
};
IconRemoveCircleOutline_TwoTone.styles = style;
IconRemoveCircleOutline_TwoTone = __decorate([
    customElement('mdui-icon-remove-circle-outline--two-tone')
], IconRemoveCircleOutline_TwoTone);
export { IconRemoveCircleOutline_TwoTone };