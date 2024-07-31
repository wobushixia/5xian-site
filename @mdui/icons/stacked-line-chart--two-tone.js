import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconStackedLineChart_TwoTone = class IconStackedLineChart_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="m2 19.99 7.5-7.51 4 4 7.09-7.97L22 9.92l-8.5 9.56-4-4-6 6.01-1.5-1.5zm1.5-4.5 6-6.01 4 4L22 3.92l-1.41-1.41-7.09 7.97-4-4L2 13.99l1.5 1.5z"/>');
    }
};
IconStackedLineChart_TwoTone.styles = style;
IconStackedLineChart_TwoTone = __decorate([
    customElement('mdui-icon-stacked-line-chart--two-tone')
], IconStackedLineChart_TwoTone);
export { IconStackedLineChart_TwoTone };
