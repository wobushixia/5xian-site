import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAdfScanner = class IconAdfScanner extends LitElement {
    render() {
        return svgTag('<path d="M19 12h-1V4H6v8H5c-1.66 0-3 1.34-3 3v5h20v-5c0-1.66-1.34-3-3-3zm-3 0H8V6h8v6zm2 5c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>');
    }
};
IconAdfScanner.styles = style;
IconAdfScanner = __decorate([
    customElement('mdui-icon-adf-scanner')
], IconAdfScanner);
export { IconAdfScanner };