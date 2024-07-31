import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconLens_Outlined = class IconLens_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8m0-2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>');
    }
};
IconLens_Outlined.styles = style;
IconLens_Outlined = __decorate([
    customElement('mdui-icon-lens--outlined')
], IconLens_Outlined);
export { IconLens_Outlined };
