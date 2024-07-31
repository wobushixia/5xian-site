import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalWifiStatusbar_4Bar = class IconSignalWifiStatusbar_4Bar extends LitElement {
    render() {
        return svgTag('<path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4z"/>');
    }
};
IconSignalWifiStatusbar_4Bar.styles = style;
IconSignalWifiStatusbar_4Bar = __decorate([
    customElement('mdui-icon-signal-wifi-statusbar-4-bar')
], IconSignalWifiStatusbar_4Bar);
export { IconSignalWifiStatusbar_4Bar };
