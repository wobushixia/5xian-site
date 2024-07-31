import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBattery_1Bar = class IconBattery_1Bar extends LitElement {
    render() {
        return svgTag('<path d="M17 5v16c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h2V2h4v2h2c.55 0 1 .45 1 1zm-2 1H9v12h6V6z"/>');
    }
};
IconBattery_1Bar.styles = style;
IconBattery_1Bar = __decorate([
    customElement('mdui-icon-battery-1-bar')
], IconBattery_1Bar);
export { IconBattery_1Bar };