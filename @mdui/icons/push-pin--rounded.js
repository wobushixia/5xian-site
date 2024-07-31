import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPushPin_Rounded = class IconPushPin_Rounded extends LitElement {
    render() {
        return svgTag('<path fill-rule="evenodd" d="M19 12.87c0-.47-.34-.85-.8-.98A2.997 2.997 0 0 1 16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.38-.93 2.54-2.2 2.89-.46.13-.8.51-.8.98V13c0 .55.45 1 1 1h4.98l.02 7c0 .55.45 1 1 1s1-.45 1-1l-.02-7H18c.55 0 1-.45 1-1v-.13z"/>');
    }
};
IconPushPin_Rounded.styles = style;
IconPushPin_Rounded = __decorate([
    customElement('mdui-icon-push-pin--rounded')
], IconPushPin_Rounded);
export { IconPushPin_Rounded };
