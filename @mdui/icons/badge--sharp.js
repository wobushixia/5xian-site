import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBadge_Sharp = class IconBadge_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 7h-7V2H9v5H2v15h20V7zM9 12c.83 0 1.5.67 1.5 1.5S9.83 15 9 15s-1.5-.67-1.5-1.5S8.17 12 9 12zm3 6H6v-.43c0-.6.36-1.15.92-1.39.64-.28 1.34-.43 2.08-.43s1.44.15 2.08.43c.55.24.92.78.92 1.39V18zm1-9h-2V4h2v5zm5 7.5h-4V15h4v1.5zm0-3h-4V12h4v1.5z"/>');
    }
};
IconBadge_Sharp.styles = style;
IconBadge_Sharp = __decorate([
    customElement('mdui-icon-badge--sharp')
], IconBadge_Sharp);
export { IconBadge_Sharp };
