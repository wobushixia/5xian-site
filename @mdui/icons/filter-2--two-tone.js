import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_2_TwoTone = class IconFilter_2_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 17h14V3H7v14zm4-6a2 2 0 0 1 2-2h2V7h-4V5h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4v2h-6v-4z" opacity=".3"/><path d="M17 13h-4v-2h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4v2h4v2h-2a2 2 0 0 0-2 2v4h6v-2zm4-12H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16z"/>');
    }
};
IconFilter_2_TwoTone.styles = style;
IconFilter_2_TwoTone = __decorate([
    customElement('mdui-icon-filter-2--two-tone')
], IconFilter_2_TwoTone);
export { IconFilter_2_TwoTone };
