import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPieChartOutline_Rounded = class IconPieChartOutline_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 2.07c3.61.45 6.48 3.33 6.93 6.93H14c-.55 0-1-.45-1-1V4.07zM4 12c0-4.06 3.07-7.44 7-7.93v15.87c-3.93-.5-7-3.88-7-7.94zm9 7.93V14c0-.55.45-1 1-1h5.93A8.002 8.002 0 0 1 13 19.93z"/>');
    }
};
IconPieChartOutline_Rounded.styles = style;
IconPieChartOutline_Rounded = __decorate([
    customElement('mdui-icon-pie-chart-outline--rounded')
], IconPieChartOutline_Rounded);
export { IconPieChartOutline_Rounded };
