import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTipsAndUpdates_Rounded = class IconTipsAndUpdates_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M7 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm-2-2c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1zm11.5-8.5c0 3.82-2.66 5.86-3.77 6.5H5.27c-1.11-.64-3.77-2.68-3.77-6.5C1.5 5.36 4.86 2 9 2s7.5 3.36 7.5 7.5zm4.87-2.13L20 8l1.37.63L22 10l.63-1.37L24 8l-1.37-.63L22 6l-.63 1.37zM19 6l.94-2.06L22 3l-2.06-.94L19 0l-.94 2.06L16 3l2.06.94L19 6z"/>');
    }
};
IconTipsAndUpdates_Rounded.styles = style;
IconTipsAndUpdates_Rounded = __decorate([
    customElement('mdui-icon-tips-and-updates--rounded')
], IconTipsAndUpdates_Rounded);
export { IconTipsAndUpdates_Rounded };