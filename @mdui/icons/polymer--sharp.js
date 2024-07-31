import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPolymer_Sharp = class IconPolymer_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8L19 4z"/>');
    }
};
IconPolymer_Sharp.styles = style;
IconPolymer_Sharp = __decorate([
    customElement('mdui-icon-polymer--sharp')
], IconPolymer_Sharp);
export { IconPolymer_Sharp };
