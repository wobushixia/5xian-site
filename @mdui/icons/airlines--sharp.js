import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAirlines_Sharp = class IconAirlines_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M13 4 2 20h17l3-16h-9zm1.5 10a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>');
    }
};
IconAirlines_Sharp.styles = style;
IconAirlines_Sharp = __decorate([
    customElement('mdui-icon-airlines--sharp')
], IconAirlines_Sharp);
export { IconAirlines_Sharp };
