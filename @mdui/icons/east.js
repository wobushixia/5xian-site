import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEast = class IconEast extends LitElement {
    render() {
        return svgTag('<path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"/>');
    }
};
IconEast.styles = style;
IconEast = __decorate([
    customElement('mdui-icon-east')
], IconEast);
export { IconEast };