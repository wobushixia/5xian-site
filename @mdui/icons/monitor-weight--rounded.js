import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconMonitorWeight_Rounded = class IconMonitorWeight_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 9c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/><circle cx="10.5" cy="9" r=".5"/><circle cx="13.5" cy="9" r=".5"/><circle cx="12" cy="9" r=".5"/>');
    }
};
IconMonitorWeight_Rounded.styles = style;
IconMonitorWeight_Rounded = __decorate([
    customElement('mdui-icon-monitor-weight--rounded')
], IconMonitorWeight_Rounded);
export { IconMonitorWeight_Rounded };
