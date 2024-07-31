import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAnnouncement_TwoTone = class IconAnnouncement_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 4v13.17l.59-.59.58-.58H20V4H4zm9 11h-2v-2h2v2zm0-4h-2V5h2v6z" opacity=".3"/><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z"/>');
    }
};
IconAnnouncement_TwoTone.styles = style;
IconAnnouncement_TwoTone = __decorate([
    customElement('mdui-icon-announcement--two-tone')
], IconAnnouncement_TwoTone);
export { IconAnnouncement_TwoTone };
