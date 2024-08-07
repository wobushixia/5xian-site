import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutbox_TwoTone = class IconOutbox_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 18c-1.63 0-3.06-.79-3.98-2H5v3h14v-3h-3.02c-.92 1.21-2.35 2-3.98 2z" opacity=".3"/><path d="M11 14h2v-3h3l-4-4-4 4h3z"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.02c.91 1.21 2.35 2 3.98 2s3.06-.79 3.98-2H19v3zm0-5h-4.18c-.41 1.16-1.51 2-2.82 2s-2.4-.84-2.82-2H5V5h14v9z"/>');
    }
};
IconOutbox_TwoTone.styles = style;
IconOutbox_TwoTone = __decorate([
    customElement('mdui-icon-outbox--two-tone')
], IconOutbox_TwoTone);
export { IconOutbox_TwoTone };
