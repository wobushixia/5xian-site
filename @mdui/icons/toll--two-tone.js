import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToll_TwoTone = class IconToll_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M15 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" opacity=".3"/><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12a5.99 5.99 0 0 1 4-5.65V4.26C3.55 5.15 1 8.27 1 12c0 3.73 2.55 6.85 6 7.74v-2.09A5.99 5.99 0 0 1 3 12z"/>');
    }
};
IconToll_TwoTone.styles = style;
IconToll_TwoTone = __decorate([
    customElement('mdui-icon-toll--two-tone')
], IconToll_TwoTone);
export { IconToll_TwoTone };
