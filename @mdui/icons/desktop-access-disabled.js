import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDesktopAccessDisabled = class IconDesktopAccessDisabled extends LitElement {
    render() {
        return svgTag('<path d="M23 16c0 1.1-.9 2-2 2h-1l-2-2h3V4H6L4 2h17c1.1 0 2 .9 2 2v12zm-5.5 2-2-2zm-2.6 0 6 6 1.3-1.3-4.7-4.7-2-2L1.2 1.8 0 3.1l1 1V16c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h.9zM3 16V6.1l9.9 9.9H3z"/>');
    }
};
IconDesktopAccessDisabled.styles = style;
IconDesktopAccessDisabled = __decorate([
    customElement('mdui-icon-desktop-access-disabled')
], IconDesktopAccessDisabled);
export { IconDesktopAccessDisabled };
