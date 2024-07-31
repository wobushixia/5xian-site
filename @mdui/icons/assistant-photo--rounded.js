import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAssistantPhoto_Rounded = class IconAssistantPhoto_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m14.4 6-.24-1.2c-.09-.46-.5-.8-.98-.8H6c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1s1-.45 1-1v-6h5.6l.24 1.2c.09.47.5.8.98.8H19c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1h-4.6z"/>');
    }
};
IconAssistantPhoto_Rounded.styles = style;
IconAssistantPhoto_Rounded = __decorate([
    customElement('mdui-icon-assistant-photo--rounded')
], IconAssistantPhoto_Rounded);
export { IconAssistantPhoto_Rounded };