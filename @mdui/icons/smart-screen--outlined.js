import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSmartScreen_Outlined = class IconSmartScreen_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12.5 11.25H14v1.5h-1.5zm2.5 0h1.5v1.5H15zm-5 0h1.5v1.5H10zm-2.5 0H9v1.5H7.5z"/><path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM4 17H3V7h1v10zm14 0H6V7h12v10zm3 0h-1V7h1v10z"/>');
    }
};
IconSmartScreen_Outlined.styles = style;
IconSmartScreen_Outlined = __decorate([
    customElement('mdui-icon-smart-screen--outlined')
], IconSmartScreen_Outlined);
export { IconSmartScreen_Outlined };
