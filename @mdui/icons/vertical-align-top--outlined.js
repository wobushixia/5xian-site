import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVerticalAlignTop_Outlined = class IconVerticalAlignTop_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z"/>');
    }
};
IconVerticalAlignTop_Outlined.styles = style;
IconVerticalAlignTop_Outlined = __decorate([
    customElement('mdui-icon-vertical-align-top--outlined')
], IconVerticalAlignTop_Outlined);
export { IconVerticalAlignTop_Outlined };
