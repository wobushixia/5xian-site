import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconBungalow_Rounded = class IconBungalow_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 16c.55 0 1 .45 1 1v4h3c.55 0 1-.45 1-1v-5.21l.57.92a1.003 1.003 0 0 0 1.7-1.06L12.85 4.36a1 1 0 0 0-1.7 0L4.73 14.65c-.29.47-.15 1.09.32 1.38.47.29 1.08.15 1.38-.32L7 14.8V20c0 .55.45 1 1 1h3v-4c0-.55.45-1 1-1zm1-3c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/>');
    }
};
IconBungalow_Rounded.styles = style;
IconBungalow_Rounded = __decorate([
    customElement('mdui-icon-bungalow--rounded')
], IconBungalow_Rounded);
export { IconBungalow_Rounded };
