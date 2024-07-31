import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWbShade_Sharp = class IconWbShade_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 12v2.5l5.5 5.5H22l-8-8zm0 8h3l-3-3v3zM8 4l-6 6h2v10h8V10h2L8 4zm1 10H7v-4h2v4z"/>');
    }
};
IconWbShade_Sharp.styles = style;
IconWbShade_Sharp = __decorate([
    customElement('mdui-icon-wb-shade--sharp')
], IconWbShade_Sharp);
export { IconWbShade_Sharp };