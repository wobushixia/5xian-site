import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconWorkOff_Sharp = class IconWorkOff_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M10 4h4v2h-3.6L22 17.6V6h-6V4c0-1.1-.9-2-2-2h-4c-.98 0-1.79.71-1.96 1.64L10 5.6V4zM3.4 1.84 1.99 3.25 4.74 6H2.01L2 21h17.74l2 2 1.41-1.41z"/>');
    }
};
IconWorkOff_Sharp.styles = style;
IconWorkOff_Sharp = __decorate([
    customElement('mdui-icon-work-off--sharp')
], IconWorkOff_Sharp);
export { IconWorkOff_Sharp };