import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSaveAs = class IconSaveAs extends LitElement {
    render() {
        return svgTag('<path d="M21 12.4V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.4l8.6-8.6zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.26.26-.85.85-1.77-1.77.85-.85c.2-.2.51-.2.71 0l1.06 1.06c.2.2.2.52 0 .71z"/>');
    }
};
IconSaveAs.styles = style;
IconSaveAs = __decorate([
    customElement('mdui-icon-save-as')
], IconSaveAs);
export { IconSaveAs };