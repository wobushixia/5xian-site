import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNoMeals_Rounded = class IconNoMeals_Rounded extends LitElement {
    render() {
        return svgTag('<path d="m21 18.17-2-2V14h-1c-1.1 0-2-.9-2-2V6c0-1.49 1.6-3.32 3.76-3.85.63-.15 1.24.33 1.24.98v15.04zm.19 4.44a.996.996 0 0 1-1.41 0l-9.76-9.76c-.33.09-.66.15-1.02.15v8c0 .55-.45 1-1 1s-1-.45-1-1v-8c-2.21 0-4-1.79-4-4V5.83L1.39 4.22A.996.996 0 1 1 2.8 2.81l18.38 18.38c.4.39.4 1.03.01 1.42zM6.17 9 5 7.83V9h1.17zM13 9V3c0-.55-.45-1-1-1s-1 .45-1 1v5.17l1.85 1.85c.09-.33.15-.66.15-1.02zM9 3c0-.55-.45-1-1-1s-1 .45-1 1v1.17l2 2V3z"/>');
    }
};
IconNoMeals_Rounded.styles = style;
IconNoMeals_Rounded = __decorate([
    customElement('mdui-icon-no-meals--rounded')
], IconNoMeals_Rounded);
export { IconNoMeals_Rounded };