import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRecentActors_Outlined = class IconRecentActors_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M21 5h2v14h-2zm-4 0h2v14h-2zm-3 0H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-1 12H3V7h10v10z"/><circle cx="8" cy="9.94" r="1.95"/><path d="M11.89 15.35c0-1.3-2.59-1.95-3.89-1.95s-3.89.65-3.89 1.95V16h7.78v-.65z"/>');
    }
};
IconRecentActors_Outlined.styles = style;
IconRecentActors_Outlined = __decorate([
    customElement('mdui-icon-recent-actors--outlined')
], IconRecentActors_Outlined);
export { IconRecentActors_Outlined };
