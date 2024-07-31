import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRemoveCircle_Outlined = class IconRemoveCircle_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"/>');
    }
};
IconRemoveCircle_Outlined.styles = style;
IconRemoveCircle_Outlined = __decorate([
    customElement('mdui-icon-remove-circle--outlined')
], IconRemoveCircle_Outlined);
export { IconRemoveCircle_Outlined };