import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconVideoLibrary_TwoTone = class IconVideoLibrary_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M8 16h12V4H8v12zm4-10.5 6 4.5-6 4.5v-9z" opacity=".3"/><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM12 5.5v9l6-4.5z"/>');
    }
};
IconVideoLibrary_TwoTone.styles = style;
IconVideoLibrary_TwoTone = __decorate([
    customElement('mdui-icon-video-library--two-tone')
], IconVideoLibrary_TwoTone);
export { IconVideoLibrary_TwoTone };
