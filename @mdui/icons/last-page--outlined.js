import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLastPage_Outlined = class IconLastPage_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M5.59 7.41 10.18 12l-4.59 4.59L7 18l6-6-6-6-1.41 1.41zM16 6h2v12h-2V6z"/>');
    }
};
IconLastPage_Outlined.styles = style;
IconLastPage_Outlined = __decorate([
    customElement('mdui-icon-last-page--outlined')
], IconLastPage_Outlined);
export { IconLastPage_Outlined };
