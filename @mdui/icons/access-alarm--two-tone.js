import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAccessAlarm_TwoTone = class IconAccessAlarm_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.75 10.85L11 14V8h1.5v5.25l4 2.37-.75 1.23z" opacity=".3"/><path d="M12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a9 9 0 0 0 0-18zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm.5-12H11v6l4.75 2.85.75-1.23-4-2.37zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86zM7.88 3.39 6.6 1.86 2 5.71l1.29 1.53z"/>');
    }
};
IconAccessAlarm_TwoTone.styles = style;
IconAccessAlarm_TwoTone = __decorate([
    customElement('mdui-icon-access-alarm--two-tone')
], IconAccessAlarm_TwoTone);
export { IconAccessAlarm_TwoTone };
