import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconCardTravel_Sharp = class IconCardTravel_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M22 6h-5V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H2v15h20V6zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"/>');
    }
};
IconCardTravel_Sharp.styles = style;
IconCardTravel_Sharp = __decorate([
    customElement('mdui-icon-card-travel--sharp')
], IconCardTravel_Sharp);
export { IconCardTravel_Sharp };
