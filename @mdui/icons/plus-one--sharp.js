import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlusOne_Sharp = class IconPlusOne_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 8H8v4H4v2h4v4h2v-4h4v-2h-4V8zm4.5-1.92V7.9l2.5-.5V18h2V5l-4.5 1.08z"/>');
    }
};
IconPlusOne_Sharp.styles = style;
IconPlusOne_Sharp = __decorate([
    customElement('mdui-icon-plus-one--sharp')
], IconPlusOne_Sharp);
export { IconPlusOne_Sharp };