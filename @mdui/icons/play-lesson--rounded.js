import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlayLesson_Rounded = class IconPlayLesson_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M18 11c.34 0 .67.03 1 .08V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h7.26A6.995 6.995 0 0 1 18 11zm-10.24-.45a.5.5 0 0 1-.76-.43V4h5v6.12a.5.5 0 0 1-.76.43L9.5 9.5l-1.74 1.05z"/><path d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-1.25 6.6v-3.2c0-.39.43-.63.76-.42l2.56 1.6c.31.2.31.65 0 .85l-2.56 1.6c-.33.2-.76-.04-.76-.43z"/>');
    }
};
IconPlayLesson_Rounded.styles = style;
IconPlayLesson_Rounded = __decorate([
    customElement('mdui-icon-play-lesson--rounded')
], IconPlayLesson_Rounded);
export { IconPlayLesson_Rounded };
