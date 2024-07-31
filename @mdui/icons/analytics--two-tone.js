import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAnalytics_TwoTone = class IconAnalytics_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 5h14v14H5z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/><path d="M7 12h2v5H7zm8-5h2v10h-2zm-4 7h2v3h-2zm0-4h2v2h-2z"/>');
    }
};
IconAnalytics_TwoTone.styles = style;
IconAnalytics_TwoTone = __decorate([
    customElement('mdui-icon-analytics--two-tone')
], IconAnalytics_TwoTone);
export { IconAnalytics_TwoTone };
