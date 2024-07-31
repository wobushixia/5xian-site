import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBook_Rounded = class IconBook_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>');
    }
};
IconBook_Rounded.styles = style;
IconBook_Rounded = __decorate([
    customElement('mdui-icon-book--rounded')
], IconBook_Rounded);
export { IconBook_Rounded };
