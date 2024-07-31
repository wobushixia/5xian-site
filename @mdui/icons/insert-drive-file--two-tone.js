import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconInsertDriveFile_TwoTone = class IconInsertDriveFile_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13 4H6v16h12V9h-5z" opacity=".3"/><path d="m20 8-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm-2 12H6V4h7v5h5v11z"/>');
    }
};
IconInsertDriveFile_TwoTone.styles = style;
IconInsertDriveFile_TwoTone = __decorate([
    customElement('mdui-icon-insert-drive-file--two-tone')
], IconInsertDriveFile_TwoTone);
export { IconInsertDriveFile_TwoTone };
