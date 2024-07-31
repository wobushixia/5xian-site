import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSubject_TwoTone = class IconSubject_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"/>');
    }
};
IconSubject_TwoTone.styles = style;
IconSubject_TwoTone = __decorate([
    customElement('mdui-icon-subject--two-tone')
], IconSubject_TwoTone);
export { IconSubject_TwoTone };
