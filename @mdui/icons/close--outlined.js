import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconClose_Outlined = class IconClose_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>');
    }
};
IconClose_Outlined.styles = style;
IconClose_Outlined = __decorate([
    customElement('mdui-icon-close--outlined')
], IconClose_Outlined);
export { IconClose_Outlined };
