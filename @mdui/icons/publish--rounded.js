import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPublish_Rounded = class IconPublish_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M5 5c0 .55.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1H6c-.55 0-1 .45-1 1zm2.41 9H9v5c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-5h1.59c.89 0 1.34-1.08.71-1.71L12.71 7.7a.996.996 0 0 0-1.41 0l-4.59 4.59c-.63.63-.19 1.71.7 1.71z"/>');
    }
};
IconPublish_Rounded.styles = style;
IconPublish_Rounded = __decorate([
    customElement('mdui-icon-publish--rounded')
], IconPublish_Rounded);
export { IconPublish_Rounded };
