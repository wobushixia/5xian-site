import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAddHome_Outlined = class IconAddHome_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m12 5.5 6 4.5v1c.7 0 1.37.1 2 .29V9l-8-6-8 6v12h7.68c-.3-.62-.5-1.29-.6-2H6v-9l6-4.5z"/><path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm3 5.5h-2.5V21h-1v-2.5H15v-1h2.5V15h1v2.5H21v1z"/>');
    }
};
IconAddHome_Outlined.styles = style;
IconAddHome_Outlined = __decorate([
    customElement('mdui-icon-add-home--outlined')
], IconAddHome_Outlined);
export { IconAddHome_Outlined };
