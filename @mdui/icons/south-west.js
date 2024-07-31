import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSouthWest = class IconSouthWest extends LitElement {
    render() {
        return svgTag('<path d="M15 19v-2H8.41L20 5.41 18.59 4 7 15.59V9H5v10h10z"/>');
    }
};
IconSouthWest.styles = style;
IconSouthWest = __decorate([
    customElement('mdui-icon-south-west')
], IconSouthWest);
export { IconSouthWest };
