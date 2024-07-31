import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconDownload_TwoTone = class IconDownload_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M13 9V5h-2v6H9.83L12 13.17 14.17 11H13z" opacity=".3"/><path d="M15 9V3H9v6H5l7 7 7-7h-4zm-3 4.17L9.83 11H11V5h2v6h1.17L12 13.17zM5 18h14v2H5z"/>');
    }
};
IconDownload_TwoTone.styles = style;
IconDownload_TwoTone = __decorate([
    customElement('mdui-icon-download--two-tone')
], IconDownload_TwoTone);
export { IconDownload_TwoTone };
