import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let Icon8kPlus = class Icon8kPlus extends LitElement {
    render() {
        return svgTag('<path d="M6.5 12.5H8V14H6.5zm0-2.5H8v1.5H6.5zM19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 14c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1h2.5c.55 0 1 .45 1 1v4zm6.5 1h-1.75l-1.75-2.25V15H11V9h1.5v2.25L14.25 9H16l-2.25 3L16 15zm4-2.5h-1.5V14h-1v-1.5H16v-1h1.5V10h1v1.5H20v1z"/>');
    }
};
Icon8kPlus.styles = style;
Icon8kPlus = __decorate([
    customElement('mdui-icon-8k-plus')
], Icon8kPlus);
export { Icon8kPlus };
