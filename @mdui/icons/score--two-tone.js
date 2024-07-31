import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconScore_TwoTone = class IconScore_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 19h8l-4-4zm0-2.5 4-4 4 4 6-6V5H5v11.5zM12 6h1.5v3l2-3h1.7l-2 3 2 3h-1.7l-2-3v3H12V6zM7 8.25h2.5V7.5H7V6h4v3.75H8.5v.75H11V12H7V8.25zM19 19v-6l-6 6z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5l4-4 4 4 6-6v6zm0-8.5-6 6-4-4-4 4V5h14v5.5zM13.5 9V6H12v6h1.5zm3.7 3-2-3 2-3h-1.7l-2 3 2 3zM11 10.5H8.5v-.75H11V6H7v1.5h2.5v.75H7V12h4z"/>');
    }
};
IconScore_TwoTone.styles = style;
IconScore_TwoTone = __decorate([
    customElement('mdui-icon-score--two-tone')
], IconScore_TwoTone);
export { IconScore_TwoTone };