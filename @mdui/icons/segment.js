import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSegment = class IconSegment extends LitElement {
    render() {
        return svgTag('<path d="M9 18h12v-2H9v2zM3 6v2h18V6H3zm6 7h12v-2H9v2z"/>');
    }
};
IconSegment.styles = style;
IconSegment = __decorate([
    customElement('mdui-icon-segment')
], IconSegment);
export { IconSegment };
