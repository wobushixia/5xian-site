import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPersonRemove_Outlined = class IconPersonRemove_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M14 8c0-2.21-1.79-4-4-4S6 5.79 6 8s1.79 4 4 4 4-1.79 4-4zm-2 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 18v2h16v-2c0-2.66-5.33-4-8-4s-8 1.34-8 4zm2 0c.2-.71 3.3-2 6-2 2.69 0 5.77 1.28 6 2H4zm13-8h6v2h-6z"/>');
    }
};
IconPersonRemove_Outlined.styles = style;
IconPersonRemove_Outlined = __decorate([
    customElement('mdui-icon-person-remove--outlined')
], IconPersonRemove_Outlined);
export { IconPersonRemove_Outlined };