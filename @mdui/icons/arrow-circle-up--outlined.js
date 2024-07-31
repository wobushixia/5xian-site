import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowCircleUp_Outlined = class IconArrowCircleUp_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0 2c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-10v4h2v-4h3l-4-4-4 4h3z"/>');
    }
};
IconArrowCircleUp_Outlined.styles = style;
IconArrowCircleUp_Outlined = __decorate([
    customElement('mdui-icon-arrow-circle-up--outlined')
], IconArrowCircleUp_Outlined);
export { IconArrowCircleUp_Outlined };