import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSubdirectoryArrowRight_Outlined = class IconSubdirectoryArrowRight_Outlined extends LitElement {
    render() {
        return svgTag('<path d="m19 15-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"/>');
    }
};
IconSubdirectoryArrowRight_Outlined.styles = style;
IconSubdirectoryArrowRight_Outlined = __decorate([
    customElement('mdui-icon-subdirectory-arrow-right--outlined')
], IconSubdirectoryArrowRight_Outlined);
export { IconSubdirectoryArrowRight_Outlined };