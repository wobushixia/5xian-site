import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconNextWeek_Sharp = class IconNextWeek_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 7h-6V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H2v15h20V7zM10 5h4v2h-4V5zm1 13.5-1-1 3-3-3-3 1-1 4 4-4 4z"/>');
    }
};
IconNextWeek_Sharp.styles = style;
IconNextWeek_Sharp = __decorate([
    customElement('mdui-icon-next-week--sharp')
], IconNextWeek_Sharp);
export { IconNextWeek_Sharp };
