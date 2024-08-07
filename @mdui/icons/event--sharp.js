import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEvent_Sharp = class IconEvent_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M17 13h-5v5h5v-5zM16 2v2H8V2H6v2H3.01L3 22h18V4h-3V2h-2zm3 18H5V9h14v11z"/>');
    }
};
IconEvent_Sharp.styles = style;
IconEvent_Sharp = __decorate([
    customElement('mdui-icon-event--sharp')
], IconEvent_Sharp);
export { IconEvent_Sharp };
