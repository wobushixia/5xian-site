import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGolfCourse_Outlined = class IconGolfCourse_Outlined extends LitElement {
    render() {
        return svgTag('<circle cx="19.5" cy="19.5" r="1.5"/><path d="M17 5.92 9 2v18H7v-1.73c-1.79.35-3 .99-3 1.73 0 1.1 2.69 2 6 2s6-.9 6-2c0-.99-2.16-1.81-5-1.97V8.98l6-3.06z"/>');
    }
};
IconGolfCourse_Outlined.styles = style;
IconGolfCourse_Outlined = __decorate([
    customElement('mdui-icon-golf-course--outlined')
], IconGolfCourse_Outlined);
export { IconGolfCourse_Outlined };
