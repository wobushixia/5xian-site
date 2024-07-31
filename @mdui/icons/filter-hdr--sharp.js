import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterHdr_Sharp = class IconFilterHdr_Sharp extends LitElement {
    render() {
        return svgTag('<path d="m14 6-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>');
    }
};
IconFilterHdr_Sharp.styles = style;
IconFilterHdr_Sharp = __decorate([
    customElement('mdui-icon-filter-hdr--sharp')
], IconFilterHdr_Sharp);
export { IconFilterHdr_Sharp };