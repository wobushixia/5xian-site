import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconEditLocationAlt = class IconEditLocationAlt extends LitElement {
    render() {
        return svgTag('<path d="M13.95 13H9V8.05l5.61-5.61A8.17 8.17 0 0 0 12 2c-4.2 0-8 3.22-8 8.2 0 3.32 2.67 7.25 8 11.8 5.33-4.55 8-8.48 8-11.8 0-1.01-.16-1.94-.45-2.8l-5.6 5.6z"/><path d="M11 11h2.12l6.16-6.16-2.12-2.12L11 8.88zm9.71-9L20 1.29c-.2-.19-.45-.29-.71-.29-.13 0-.48.07-.71.29l-.72.72 2.12 2.12.72-.72c.4-.39.4-1.02.01-1.41z"/>');
    }
};
IconEditLocationAlt.styles = style;
IconEditLocationAlt = __decorate([
    customElement('mdui-icon-edit-location-alt')
], IconEditLocationAlt);
export { IconEditLocationAlt };
