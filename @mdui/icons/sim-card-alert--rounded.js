import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSimCardAlert_Rounded = class IconSimCardAlert_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 2h-7.17c-.53 0-1.04.21-1.42.59L4.6 7.42c-.37.37-.58.88-.58 1.4L4 20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 15c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm0-4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1z"/>');
    }
};
IconSimCardAlert_Rounded.styles = style;
IconSimCardAlert_Rounded = __decorate([
    customElement('mdui-icon-sim-card-alert--rounded')
], IconSimCardAlert_Rounded);
export { IconSimCardAlert_Rounded };
