import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStayCurrentPortrait_TwoTone = class IconStayCurrentPortrait_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M7 5h10v14H7z" opacity=".3"/><path d="M17 1.01 7 1c-1.1 0-1.99.9-1.99 2v18c0 1.1.89 2 1.99 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>');
    }
};
IconStayCurrentPortrait_TwoTone.styles = style;
IconStayCurrentPortrait_TwoTone = __decorate([
    customElement('mdui-icon-stay-current-portrait--two-tone')
], IconStayCurrentPortrait_TwoTone);
export { IconStayCurrentPortrait_TwoTone };
