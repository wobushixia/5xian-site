import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSouthEast_Sharp = class IconSouthEast_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M19 9h-2v6.59L5.41 4 4 5.41 15.59 17H9v2h10V9z"/>');
    }
};
IconSouthEast_Sharp.styles = style;
IconSouthEast_Sharp = __decorate([
    customElement('mdui-icon-south-east--sharp')
], IconSouthEast_Sharp);
export { IconSouthEast_Sharp };
