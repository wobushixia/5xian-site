import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconFilter_Rounded = class IconFilter_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m15.56 10.81-2.35 3.02-1.56-1.88a.5.5 0 0 0-.78.01l-1.74 2.23a.5.5 0 0 0 .39.81h8.98a.5.5 0 0 0 .4-.8l-2.55-3.39a.498.498 0 0 0-.79 0zM2 5c-.55 0-1 .45-1 1v15c0 1.1.9 2 2 2h15c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1-.45-1-1V6c0-.55-.45-1-1-1zm19-4H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-1 16H8c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>');
    }
};
IconFilter_Rounded.styles = style;
IconFilter_Rounded = __decorate([
    customElement('mdui-icon-filter--rounded')
], IconFilter_Rounded);
export { IconFilter_Rounded };
