import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconModeEdit_Rounded = class IconModeEdit_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a.996.996 0 0 0 0-1.41z"/>');
    }
};
IconModeEdit_Rounded.styles = style;
IconModeEdit_Rounded = __decorate([
    customElement('mdui-icon-mode-edit--rounded')
], IconModeEdit_Rounded);
export { IconModeEdit_Rounded };
