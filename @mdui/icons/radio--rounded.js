import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRadio_Rounded = class IconRadio_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V8c0-1.1-.9-2-2-2H8.3l7.43-3c.46-.19.68-.71.49-1.17a.894.894 0 0 0-1.17-.49L3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H4V9c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v3z"/>');
    }
};
IconRadio_Rounded.styles = style;
IconRadio_Rounded = __decorate([
    customElement('mdui-icon-radio--rounded')
], IconRadio_Rounded);
export { IconRadio_Rounded };
