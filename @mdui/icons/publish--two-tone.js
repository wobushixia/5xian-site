import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPublish_TwoTone = class IconPublish_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M9.83 12H11v6h2v-6h1.17L12 9.83z" opacity=".3"/><path d="M5 4h14v2H5zm7 3-7 7h4v6h6v-6h4l-7-7zm1 5v6h-2v-6H9.83L12 9.83 14.17 12H13z"/>');
    }
};
IconPublish_TwoTone.styles = style;
IconPublish_TwoTone = __decorate([
    customElement('mdui-icon-publish--two-tone')
], IconPublish_TwoTone);
export { IconPublish_TwoTone };
