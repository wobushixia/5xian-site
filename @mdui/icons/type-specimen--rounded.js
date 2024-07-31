import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconTypeSpecimen_Rounded = class IconTypeSpecimen_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M3 6c-.55 0-1 .45-1 1v13c0 1.1.9 2 2 2h13c.55 0 1-.45 1-1s-.45-1-1-1H4V7c0-.55-.45-1-1-1z"/><path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3.54 12.01-.63-1.82H12.2l-.65 1.82a.725.725 0 1 1-1.36-.5l2.73-7.27c.16-.44.6-.74 1.08-.74.48 0 .92.3 1.09.75l2.73 7.27c.18.47-.17.98-.68.98-.31 0-.58-.19-.68-.49z"/><path d="m13.96 7.17-1.31 3.72h2.69l-1.3-3.72z"/>');
    }
};
IconTypeSpecimen_Rounded.styles = style;
IconTypeSpecimen_Rounded = __decorate([
    customElement('mdui-icon-type-specimen--rounded')
], IconTypeSpecimen_Rounded);
export { IconTypeSpecimen_Rounded };