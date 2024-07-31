import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalWifi_4Bar = class IconSignalWifi_4Bar extends LitElement {
    render() {
        return svgTag('<path d="M12.01 21.49 23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/>');
    }
};
IconSignalWifi_4Bar.styles = style;
IconSignalWifi_4Bar = __decorate([
    customElement('mdui-icon-signal-wifi-4-bar')
], IconSignalWifi_4Bar);
export { IconSignalWifi_4Bar };
