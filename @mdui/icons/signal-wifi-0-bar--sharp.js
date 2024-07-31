import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSignalWifi_0Bar_Sharp = class IconSignalWifi_0Bar_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0 0 12 4zM2.92 9.07C5.51 7.08 8.67 6 12 6s6.49 1.08 9.08 3.07L12 18.17l-9.08-9.1z"/>');
    }
};
IconSignalWifi_0Bar_Sharp.styles = style;
IconSignalWifi_0Bar_Sharp = __decorate([
    customElement('mdui-icon-signal-wifi-0-bar--sharp')
], IconSignalWifi_0Bar_Sharp);
export { IconSignalWifi_0Bar_Sharp };