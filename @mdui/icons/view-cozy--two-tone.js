import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconViewCozy_TwoTone = class IconViewCozy_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 18h16V6H4v12zm8.75-10.75h4v4h-4v-4zm0 5.5h4v4h-4v-4zm-5.5-5.5h4v4h-4v-4zm0 5.5h4v4h-4v-4z" opacity=".3"/><path d="M7.25 7.25h4v4h-4zm5.5 0h4v4h-4zm-5.5 5.5h4v4h-4zm5.5 0h4v4h-4z"/><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>');
    }
};
IconViewCozy_TwoTone.styles = style;
IconViewCozy_TwoTone = __decorate([
    customElement('mdui-icon-view-cozy--two-tone')
], IconViewCozy_TwoTone);
export { IconViewCozy_TwoTone };
