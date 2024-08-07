import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRadioButtonChecked_TwoTone = class IconRadioButtonChecked_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/><circle cx="12" cy="12" r="5"/>');
    }
};
IconRadioButtonChecked_TwoTone.styles = style;
IconRadioButtonChecked_TwoTone = __decorate([
    customElement('mdui-icon-radio-button-checked--two-tone')
], IconRadioButtonChecked_TwoTone);
export { IconRadioButtonChecked_TwoTone };
