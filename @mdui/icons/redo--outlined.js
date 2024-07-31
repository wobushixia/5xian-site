import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRedo_Outlined = class IconRedo_Outlined extends LitElement {
    render() {
        return svgTag('<path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 0 1 7.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/>');
    }
};
IconRedo_Outlined.styles = style;
IconRedo_Outlined = __decorate([
    customElement('mdui-icon-redo--outlined')
], IconRedo_Outlined);
export { IconRedo_Outlined };
