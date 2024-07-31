import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMergeType_Outlined = class IconMergeType_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M17 20.41 18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z"/>');
    }
};
IconMergeType_Outlined.styles = style;
IconMergeType_Outlined = __decorate([
    customElement('mdui-icon-merge-type--outlined')
], IconMergeType_Outlined);
export { IconMergeType_Outlined };