import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFolderOff = class IconFolderOff extends LitElement {
    render() {
        return svgTag('<path d="M20 6h-8l-2-2H6.83l14.93 14.93c.15-.28.24-.59.24-.93V8c0-1.1-.9-2-2-2zM2.1 2.1.69 3.51l1.56 1.56c-.15.28-.24.59-.24.93L2 18c0 1.1.9 2 2 2h13.17l3.31 3.31 1.41-1.41L2.1 2.1z"/>');
    }
};
IconFolderOff.styles = style;
IconFolderOff = __decorate([
    customElement('mdui-icon-folder-off')
], IconFolderOff);
export { IconFolderOff };
