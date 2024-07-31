import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGrade_Sharp = class IconGrade_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z"/>');
    }
};
IconGrade_Sharp.styles = style;
IconGrade_Sharp = __decorate([
    customElement('mdui-icon-grade--sharp')
], IconGrade_Sharp);
export { IconGrade_Sharp };