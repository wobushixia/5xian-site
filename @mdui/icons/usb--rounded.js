import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconUsb_Rounded = class IconUsb_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 7h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1v2h-3V5h1a.5.5 0 0 0 .4-.8l-2-2.67c-.2-.27-.6-.27-.8 0l-2 2.67a.5.5 0 0 0 .4.8h1v8H8v-2.07c.83-.44 1.38-1.36 1.14-2.43-.17-.77-.77-1.4-1.52-1.61C6.15 6.48 4.8 7.59 4.8 9c0 .85.5 1.56 1.2 1.93V13c0 1.1.9 2 2 2h3v3.05c-.86.45-1.39 1.42-1.13 2.49a2.204 2.204 0 0 0 4.34-.54c0-.85-.49-1.58-1.2-1.95V15h3c1.1 0 2-.9 2-2v-2c.55 0 1-.45 1-1V8C19 7.45 18.55 7 18 7z"/>');
    }
};
IconUsb_Rounded.styles = style;
IconUsb_Rounded = __decorate([
    customElement('mdui-icon-usb--rounded')
], IconUsb_Rounded);
export { IconUsb_Rounded };
