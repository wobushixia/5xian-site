import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconControlCamera_Outlined = class IconControlCamera_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M5.54 8.46 2 12l3.54 3.54 1.76-1.77L5.54 12l1.76-1.77zm6.46 10-1.77-1.76-1.77 1.76L12 22l3.54-3.54-1.77-1.76zm6.46-10-1.76 1.77L18.46 12l-1.76 1.77 1.76 1.77L22 12zm-10-2.92 1.77 1.76L12 5.54l1.77 1.76 1.77-1.76L12 2z"/><circle cx="12" cy="12" r="3"/>');
    }
};
IconControlCamera_Outlined.styles = style;
IconControlCamera_Outlined = __decorate([
    customElement('mdui-icon-control-camera--outlined')
], IconControlCamera_Outlined);
export { IconControlCamera_Outlined };
