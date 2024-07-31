import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEgg_TwoTone = class IconEgg_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 5c-1.93 0-5 4.91-5 9 0 2.76 2.24 5 5 5s5-2.24 5-5c0-4.09-3.07-9-5-9zm1 13c-3.01 0-5-2-5-5 0-.55.45-1 1-1s1 .45 1 1c0 2.92 2.42 3 3 3 .55 0 1 .45 1 1s-.45 1-1 1z" opacity=".3"/><path d="M12 3C8.5 3 5 9.33 5 14c0 3.87 3.13 7 7 7s7-3.13 7-7c0-4.67-3.5-11-7-11zm0 16c-2.76 0-5-2.24-5-5 0-4.09 3.07-9 5-9s5 4.91 5 9c0 2.76-2.24 5-5 5z"/><path d="M13 16c-.58 0-3-.08-3-3 0-.55-.45-1-1-1s-1 .45-1 1c0 3 1.99 5 5 5 .55 0 1-.45 1-1s-.45-1-1-1z"/>');
    }
};
IconEgg_TwoTone.styles = style;
IconEgg_TwoTone = __decorate([
    customElement('mdui-icon-egg--two-tone')
], IconEgg_TwoTone);
export { IconEgg_TwoTone };
