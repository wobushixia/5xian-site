import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowOutward = class IconArrowOutward extends LitElement {
    render() {
        return svgTag('<path d="M6 6v2h8.59L5 17.59 6.41 19 16 9.41V18h2V6z"/>');
    }
};
IconArrowOutward.styles = style;
IconArrowOutward = __decorate([
    customElement('mdui-icon-arrow-outward')
], IconArrowOutward);
export { IconArrowOutward };
