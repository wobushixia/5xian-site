import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTurnSlightLeft_Outlined = class IconTurnSlightLeft_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-7.58c0-.53-.21-1.04-.59-1.41l-5-5h2.25z"/>');
    }
};
IconTurnSlightLeft_Outlined.styles = style;
IconTurnSlightLeft_Outlined = __decorate([
    customElement('mdui-icon-turn-slight-left--outlined')
], IconTurnSlightLeft_Outlined);
export { IconTurnSlightLeft_Outlined };
