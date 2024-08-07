import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconOfflineShare_Sharp = class IconOfflineShare_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M6 5H4v18h12v-2H6z"/><path d="M20 1H8v18h12V1zm-2 14h-8V5h8v10z"/><path d="M12.5 10.25h2V12L17 9.5 14.5 7v1.75H11V12h1.5z"/>');
    }
};
IconOfflineShare_Sharp.styles = style;
IconOfflineShare_Sharp = __decorate([
    customElement('mdui-icon-offline-share--sharp')
], IconOfflineShare_Sharp);
export { IconOfflineShare_Sharp };
