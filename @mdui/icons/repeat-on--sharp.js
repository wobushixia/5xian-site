import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconRepeatOn_Sharp = class IconRepeatOn_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M21 1H3c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm-2 18H7v3l-4-4 4-4v3h10v-4h2v6zm-2-9V7H7v4H5V5h12V2l4 4-4 4z"/>');
    }
};
IconRepeatOn_Sharp.styles = style;
IconRepeatOn_Sharp = __decorate([
    customElement('mdui-icon-repeat-on--sharp')
], IconRepeatOn_Sharp);
export { IconRepeatOn_Sharp };
