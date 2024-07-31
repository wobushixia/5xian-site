import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNextWeek_TwoTone = class IconNextWeek_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M4 20h16V9H4v11zm6-8.5 1-1 4 4-4 4-1-1 3-3-3-3z" opacity=".3"/><path d="m11 18.5 4-4-4-4-1 1 3 3-3 3zM20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z"/>');
    }
};
IconNextWeek_TwoTone.styles = style;
IconNextWeek_TwoTone = __decorate([
    customElement('mdui-icon-next-week--two-tone')
], IconNextWeek_TwoTone);
export { IconNextWeek_TwoTone };