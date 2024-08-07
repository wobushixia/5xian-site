import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBluetooth_TwoTone = class IconBluetooth_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>');
    }
};
IconBluetooth_TwoTone.styles = style;
IconBluetooth_TwoTone = __decorate([
    customElement('mdui-icon-bluetooth--two-tone')
], IconBluetooth_TwoTone);
export { IconBluetooth_TwoTone };
