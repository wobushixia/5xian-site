import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconReportProblem_Outlined = class IconReportProblem_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M12 5.99 19.53 19H4.47L12 5.99M12 2 1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"/>');
    }
};
IconReportProblem_Outlined.styles = style;
IconReportProblem_Outlined = __decorate([
    customElement('mdui-icon-report-problem--outlined')
], IconReportProblem_Outlined);
export { IconReportProblem_Outlined };
