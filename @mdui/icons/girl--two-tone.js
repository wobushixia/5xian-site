import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGirl_TwoTone = class IconGirl_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 7.5c.97 0 1.75-.78 1.75-1.75S12.97 4 12 4s-1.75.78-1.75 1.75S11.03 7.5 12 7.5zm2 8.5v4h-4v-4H8l2.38-6.38a1.733 1.733 0 0 1 3.24 0L16 16h-2z"/>');
    }
};
IconGirl_TwoTone.styles = style;
IconGirl_TwoTone = __decorate([
    customElement('mdui-icon-girl--two-tone')
], IconGirl_TwoTone);
export { IconGirl_TwoTone };
