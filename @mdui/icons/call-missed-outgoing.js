import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCallMissedOutgoing = class IconCallMissedOutgoing extends LitElement {
    render() {
        return svgTag('<path d="m3 8.41 9 9 7-7V15h2V7h-8v2h4.59L12 14.59 4.41 7 3 8.41z"/>');
    }
};
IconCallMissedOutgoing.styles = style;
IconCallMissedOutgoing = __decorate([
    customElement('mdui-icon-call-missed-outgoing')
], IconCallMissedOutgoing);
export { IconCallMissedOutgoing };