import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNetworkWifi_2Bar = class IconNetworkWifi_2Bar extends LitElement {
    render() {
        return svgTag('<path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4zm4.78 9.38A8.853 8.853 0 0 0 12 12c-1.76 0-3.4.5-4.78 1.38l-4.3-4.3C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07l-4.3 4.31z"/>');
    }
};
IconNetworkWifi_2Bar.styles = style;
IconNetworkWifi_2Bar = __decorate([
    customElement('mdui-icon-network-wifi-2-bar')
], IconNetworkWifi_2Bar);
export { IconNetworkWifi_2Bar };