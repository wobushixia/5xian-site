import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowDownward = class IconArrowDownward extends LitElement {
    render() {
        return svgTag('<path d="m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>');
    }
};
IconArrowDownward.styles = style;
IconArrowDownward = __decorate([
    customElement('mdui-icon-arrow-downward')
], IconArrowDownward);
export { IconArrowDownward };
