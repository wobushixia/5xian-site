import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon3mp_Sharp = class Icon3mp_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M3 3v18h18V3H3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5v6zM10 10h3V9h-2V8h2V7h-3V5.5h4.5v6H10V10zm8 7h-3v1.5h-1.5v-6H18V17z"/><path d="M15 14h1.5v1.5H15z"/>');
    }
};
Icon3mp_Sharp.styles = style;
Icon3mp_Sharp = __decorate([
    customElement('mdui-icon-3mp--sharp')
], Icon3mp_Sharp);
export { Icon3mp_Sharp };