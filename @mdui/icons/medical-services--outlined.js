import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMedicalServices_Outlined = class IconMedicalServices_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z"/><path d="M13 10h-2v3H8v2h3v3h2v-3h3v-2h-3z"/>');
    }
};
IconMedicalServices_Outlined.styles = style;
IconMedicalServices_Outlined = __decorate([
    customElement('mdui-icon-medical-services--outlined')
], IconMedicalServices_Outlined);
export { IconMedicalServices_Outlined };
