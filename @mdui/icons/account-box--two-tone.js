import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccountBox_TwoTone = class IconAccountBox_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M5 17.86C6.8 16.09 9.27 15 12 15s5.2 1.09 7 2.86V5H5v12.86zM12 6c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6z" opacity=".3"/><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 16H7v-.24C8.42 17.62 10.16 17 12 17s3.58.62 5 1.76V19zm2-1.14C17.2 16.09 14.73 15 12 15s-5.2 1.09-7 2.86V5h14v12.86z"/><path d="M12 13c1.93 0 3.5-1.57 3.5-3.5S13.93 6 12 6 8.5 7.57 8.5 9.5 10.07 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"/>');
    }
};
IconAccountBox_TwoTone.styles = style;
IconAccountBox_TwoTone = __decorate([
    customElement('mdui-icon-account-box--two-tone')
], IconAccountBox_TwoTone);
export { IconAccountBox_TwoTone };
