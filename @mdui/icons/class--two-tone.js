import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconClass_TwoTone = class IconClass_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m13 13-3-2.25L7 13V4H6v16h12V4h-5z" opacity=".3"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/>');
    }
};
IconClass_TwoTone.styles = style;
IconClass_TwoTone = __decorate([
    customElement('mdui-icon-class--two-tone')
], IconClass_TwoTone);
export { IconClass_TwoTone };
