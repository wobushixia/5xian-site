import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRoofing_Outlined = class IconRoofing_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M13 18h-2v-2h2v2zm2-4H9v6h6v-6zm4-4.7V4h-3v2.6L12 3 2 12h3l7-6.31L19 12h3l-3-2.7z"/>');
    }
};
IconRoofing_Outlined.styles = style;
IconRoofing_Outlined = __decorate([
    customElement('mdui-icon-roofing--outlined')
], IconRoofing_Outlined);
export { IconRoofing_Outlined };
