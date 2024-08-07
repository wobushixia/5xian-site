import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOfflineShare_Outlined = class IconOfflineShare_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M6 5H4v16c0 1.1.9 2 2 2h10v-2H6V5z"/><path d="M18 1h-8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16h-8v-1h8v1zm0-3h-8V6h8v8zm0-10h-8V3h8v1z"/><path d="M12.5 10.25h1.63l-.69.69L14.5 12 17 9.5 14.5 7l-1.06 1.06.69.69H12c-.55 0-1 .45-1 1V12h1.5v-1.75z"/>');
    }
};
IconOfflineShare_Outlined.styles = style;
IconOfflineShare_Outlined = __decorate([
    customElement('mdui-icon-offline-share--outlined')
], IconOfflineShare_Outlined);
export { IconOfflineShare_Outlined };
