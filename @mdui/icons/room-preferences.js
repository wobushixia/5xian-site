import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRoomPreferences = class IconRoomPreferences extends LitElement {
    render() {
        return svgTag('<path d="M14 11.26V6h3v4h2V4h-5V3H5v16H3v2h9.26A6.963 6.963 0 0 1 11 17c0-2.38 1.19-4.47 3-5.74zM10 11h2v2h-2v-2zm11.69 5.37 1.14-1-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L19 12h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1c-.08.5-.08.76 0 1.26l-1.14 1 1 1.73 1.45-.49c.32.27.68.48 1.08.63L17 22h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1c.08-.51.08-.77 0-1.27zM18 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>');
    }
};
IconRoomPreferences.styles = style;
IconRoomPreferences = __decorate([
    customElement('mdui-icon-room-preferences')
], IconRoomPreferences);
export { IconRoomPreferences };