import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconArrowCircleLeft_Rounded = class IconArrowCircleLeft_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-2.79V11h3c.55 0 1 .45 1 1s-.45 1-1 1h-3v1.79c0 .45-.54.67-.85.35l-2.79-2.79c-.2-.2-.2-.51 0-.71l2.79-2.79a.5.5 0 0 1 .85.36z"/>');
    }
};
IconArrowCircleLeft_Rounded.styles = style;
IconArrowCircleLeft_Rounded = __decorate([
    customElement('mdui-icon-arrow-circle-left--rounded')
], IconArrowCircleLeft_Rounded);
export { IconArrowCircleLeft_Rounded };
