import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSecurityUpdateWarning_TwoTone = class IconSecurityUpdateWarning_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 7h2v6h-2V7zm0 8h2v2h-2v-2z" opacity=".3"/><path d="M11 15h2v2h-2zm0-8h2v6h-2z"/><path d="M17 1.01 7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 21H7v-1h10v1zm0-3H7V6h10v12zm0-14H7V3h10v1z"/><path d="M7 21h10v-1H7v1zM7 3v1h10V3H7z" opacity=".3"/>');
    }
};
IconSecurityUpdateWarning_TwoTone.styles = style;
IconSecurityUpdateWarning_TwoTone = __decorate([
    customElement('mdui-icon-security-update-warning--two-tone')
], IconSecurityUpdateWarning_TwoTone);
export { IconSecurityUpdateWarning_TwoTone };