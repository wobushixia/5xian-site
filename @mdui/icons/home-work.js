import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHomeWork = class IconHomeWork extends LitElement {
    render() {
        return svgTag('<path d="M1 11v10h5v-6h4v6h5V11L8 6z"/><path d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3H10zm9 6h-2V7h2v2z"/>');
    }
};
IconHomeWork.styles = style;
IconHomeWork = __decorate([
    customElement('mdui-icon-home-work')
], IconHomeWork);
export { IconHomeWork };
