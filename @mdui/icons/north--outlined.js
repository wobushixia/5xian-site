import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNorth_Outlined = class IconNorth_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m5 9 1.41 1.41L11 5.83V22h2V5.83l4.59 4.59L19 9l-7-7-7 7z"/>');
    }
};
IconNorth_Outlined.styles = style;
IconNorth_Outlined = __decorate([
    customElement('mdui-icon-north--outlined')
], IconNorth_Outlined);
export { IconNorth_Outlined };
