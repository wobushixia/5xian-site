import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCameraswitch_Outlined = class IconCameraswitch_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M16 7h-1l-1-1h-4L9 7H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H8V9h1.83l1-1h2.34l1 1H16v6z"/><circle cx="12" cy="12" r="2"/><path d="M8.57.52 13.05 5l1.41-1.41-1.54-1.54C17.7 2.46 21.53 6.24 22 11h2C23.36 3.3 15.79-1.67 8.57.52zm.97 19.89 1.54 1.54C6.3 21.54 2.47 17.76 2 13H0c.64 7.7 8.21 12.67 15.43 10.48L10.95 19l-1.41 1.41z"/>');
    }
};
IconCameraswitch_Outlined.styles = style;
IconCameraswitch_Outlined = __decorate([
    customElement('mdui-icon-cameraswitch--outlined')
], IconCameraswitch_Outlined);
export { IconCameraswitch_Outlined };
