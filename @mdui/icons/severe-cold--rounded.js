import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSevereCold_Rounded = class IconSevereCold_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M20 2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1s1-.45 1-1V3c0-.55-.45-1-1-1z"/><circle cx="20" cy="9" r="1"/><path d="m12 10.41 3.29-3.29a.996.996 0 1 0-1.41-1.41L12 7.59V5c0-.55-.45-1-1-1s-1 .45-1 1v2.59L8.12 5.71a.996.996 0 1 0-1.41 1.41L10 10.41V12H8.41L5.12 8.71a.996.996 0 1 0-1.41 1.41L5.59 12H3c-.55 0-1 .45-1 1s.45 1 1 1h2.59l-1.88 1.88a.996.996 0 1 0 1.41 1.41L8.41 14H10v1.59l-3.29 3.29a.996.996 0 1 0 1.41 1.41L10 18.41V21c0 .55.45 1 1 1s1-.45 1-1v-2.59l1.88 1.88a.996.996 0 1 0 1.41-1.41L12 15.59V14h1.59l3.29 3.29a.996.996 0 1 0 1.41-1.41L16.41 14H19c.55 0 1-.45 1-1s-.45-1-1-1h-7v-1.59z"/>');
    }
};
IconSevereCold_Rounded.styles = style;
IconSevereCold_Rounded = __decorate([
    customElement('mdui-icon-severe-cold--rounded')
], IconSevereCold_Rounded);
export { IconSevereCold_Rounded };
