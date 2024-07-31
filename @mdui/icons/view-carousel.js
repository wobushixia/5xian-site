import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewCarousel = class IconViewCarousel extends LitElement {
    render() {
        return svgTag('<path d="M2 7h4v10H2V7zm5 12h10V5H7v14zM18 7h4v10h-4V7z"/>');
    }
};
IconViewCarousel.styles = style;
IconViewCarousel = __decorate([
    customElement('mdui-icon-view-carousel')
], IconViewCarousel);
export { IconViewCarousel };
