import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHowToReg = class IconHowToReg extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="m9 17 3-2.94a9.34 9.34 0 0 0-1-.06c-2.67 0-8 1.34-8 4v2h9l-3-3zm2-5c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m4.47 8.5L12 17l1.4-1.41 2.07 2.08 5.13-5.17 1.4 1.41z"/>');
    }
};
IconHowToReg.styles = style;
IconHowToReg = __decorate([
    customElement('mdui-icon-how-to-reg')
], IconHowToReg);
export { IconHowToReg };
