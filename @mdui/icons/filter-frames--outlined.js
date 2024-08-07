import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilterFrames_Outlined = class IconFilterFrames_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M20 4h-4l-4-4-4 4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H4V6h4.52l3.52-3.5L15.52 6H20v14zM6 18h12V8H6v10zm2-8h8v6H8v-6z"/>');
    }
};
IconFilterFrames_Outlined.styles = style;
IconFilterFrames_Outlined = __decorate([
    customElement('mdui-icon-filter-frames--outlined')
], IconFilterFrames_Outlined);
export { IconFilterFrames_Outlined };
