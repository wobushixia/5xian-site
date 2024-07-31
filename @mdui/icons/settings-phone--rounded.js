import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconSettingsPhone_Rounded = class IconSettingsPhone_Rounded extends LitElement {
    render() {
        return svgTag('<circle cx="12" cy="10" r="1"/><circle cx="16" cy="10" r="1"/><circle cx="20" cy="10" r="1"/><path d="m15.63 14.4-2.52 2.5c-2.5-1.43-4.57-3.5-6-6l2.5-2.52c.23-.24.33-.57.27-.9L9.13 3.8c-.09-.46-.5-.8-.98-.8H4c-.56 0-1.03.47-1 1.03.17 2.89 1.05 5.6 2.43 7.97 1.58 2.73 3.85 4.99 6.57 6.57 2.37 1.37 5.08 2.26 7.97 2.43.56.03 1.03-.44 1.03-1v-4.15c0-.48-.34-.89-.8-.98l-3.67-.73a.985.985 0 0 0-.9.26z"/>');
    }
};
IconSettingsPhone_Rounded.styles = style;
IconSettingsPhone_Rounded = __decorate([
    customElement('mdui-icon-settings-phone--rounded')
], IconSettingsPhone_Rounded);
export { IconSettingsPhone_Rounded };
