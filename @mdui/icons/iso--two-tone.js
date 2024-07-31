import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconIso_TwoTone = class IconIso_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M19 19V5L5 19h14zm-2-3.5V17h-5v-1.5h5z" opacity=".3"/><path d="M12 15.5h5V17h-5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2V7.5zM19 19H5L19 5v14z"/>');
    }
};
IconIso_TwoTone.styles = style;
IconIso_TwoTone = __decorate([
    customElement('mdui-icon-iso--two-tone')
], IconIso_TwoTone);
export { IconIso_TwoTone };
