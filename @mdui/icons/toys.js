import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconToys = class IconToys extends LitElement {
    render() {
        return svgTag('<path d="M22 14c0-1.95-1.4-3.57-3.25-3.92L17.4 6.05A2.978 2.978 0 0 0 14.56 4H9.44C8.15 4 7 4.82 6.6 6.05L5.81 8.4 4.41 7l.29-.29A.996.996 0 1 0 3.29 5.3l-2 2A.996.996 0 1 0 2.7 8.71l.3-.3 1.79 1.79C3.18 10.72 2 12.22 2 14c0 1.5.83 2.79 2.05 3.48A3 3 0 0 0 7 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2a3 3 0 0 0 2.95-2.52C21.17 16.79 22 15.5 22 14zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4-8H7.41l-.02-.02 1.1-3.3A1 1 0 0 1 9.44 6H11v4zm2-4h1.56a1 1 0 0 1 .95.68l1.1 3.32H13V6zm4 12c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>');
    }
};
IconToys.styles = style;
IconToys = __decorate([
    customElement('mdui-icon-toys')
], IconToys);
export { IconToys };