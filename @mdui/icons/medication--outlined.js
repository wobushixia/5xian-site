import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMedication_Outlined = class IconMedication_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M10.5 15H8v-3h2.5V9.5h3V12H16v3h-2.5v2.5h-3V15zM19 8v11c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2zm-2 0H7v11h10V8zm1-5H6v2h12V3z"/>');
    }
};
IconMedication_Outlined.styles = style;
IconMedication_Outlined = __decorate([
    customElement('mdui-icon-medication--outlined')
], IconMedication_Outlined);
export { IconMedication_Outlined };
