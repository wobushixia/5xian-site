import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOfflinePin_Sharp = class IconOfflinePin_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"/>');
    }
};
IconOfflinePin_Sharp.styles = style;
IconOfflinePin_Sharp = __decorate([
    customElement('mdui-icon-offline-pin--sharp')
], IconOfflinePin_Sharp);
export { IconOfflinePin_Sharp };
