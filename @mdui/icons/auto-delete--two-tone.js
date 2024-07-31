import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAutoDelete_TwoTone = class IconAutoDelete_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 7H4v10h5.08c-.05-.33-.08-.66-.08-1 0-2.38 1.19-4.47 3-5.74V7z" opacity=".3"/><path d="M15 2h-3.5l-1-1h-5l-1 1H1v2h14zm1 7c-.7 0-1.37.1-2 .29V5H2v12c0 1.1.9 2 2 2h5.68A6.999 6.999 0 0 0 23 16c0-3.87-3.13-7-7-7zm-7 7c0 .34.03.67.08 1H4V7h8v3.26c-1.81 1.27-3 3.36-3 5.74zm7 5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/><path d="M16.5 12H15v5l3.6 2.1.8-1.2-2.9-1.7z"/>');
    }
};
IconAutoDelete_TwoTone.styles = style;
IconAutoDelete_TwoTone = __decorate([
    customElement('mdui-icon-auto-delete--two-tone')
], IconAutoDelete_TwoTone);
export { IconAutoDelete_TwoTone };
