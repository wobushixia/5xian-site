import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFireplace_Rounded = class IconFireplace_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 17c0 .55-.45 1-1 1h-1v-1c0-.55-.45-1-1-1h-1.15c.71-.85 1.15-1.89 1.15-3 0-1.89-1.09-2.84-1.85-3.36-1.86-1.27-2.23-2.78-2.25-3.72a.507.507 0 0 0-.77-.43c-5.8 3.43-5.15 7-5.13 7.51.03.96.49 2.07 1.24 3H7c-.55 0-1 .45-1 1v1H5c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v14zm-6.8-5.26c-.08-.46-.07-.85.08-1.28.54 1.21 2.15 1.64 1.98 3.18-.19 1.69-2.11 2.37-3.39 1.32.76-.24 1.4-1.04 1.53-1.63.12-.55-.11-1.04-.2-1.59z"/>');
    }
};
IconFireplace_Rounded.styles = style;
IconFireplace_Rounded = __decorate([
    customElement('mdui-icon-fireplace--rounded')
], IconFireplace_Rounded);
export { IconFireplace_Rounded };
