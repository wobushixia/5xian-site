import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOutlet_Rounded = class IconOutlet_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 12c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3c0 .55-.45 1-1 1zm4 6h-2c-.55 0-1-.45-1-1v-.89c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 14 16v1c0 .55-.45 1-1 1zm3-7c0 .55-.45 1-1 1s-1-.45-1-1V8c0-.55.45-1 1-1s1 .45 1 1v3z"/>');
    }
};
IconOutlet_Rounded.styles = style;
IconOutlet_Rounded = __decorate([
    customElement('mdui-icon-outlet--rounded')
], IconOutlet_Rounded);
export { IconOutlet_Rounded };
