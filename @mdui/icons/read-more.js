import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReadMore = class IconReadMore extends LitElement {
    render() {
        return svgTag('<path d="M13 7h9v2h-9zm0 8h9v2h-9zm3-4h6v2h-6zm-3 1L8 7v4H2v2h6v4z"/>');
    }
};
IconReadMore.styles = style;
IconReadMore = __decorate([
    customElement('mdui-icon-read-more')
], IconReadMore);
export { IconReadMore };
