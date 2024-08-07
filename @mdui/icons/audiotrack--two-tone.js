import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconAudiotrack_TwoTone = class IconAudiotrack_TwoTone extends LitElement {
    render() {
        return svgTag('<circle cx="10" cy="17" r="2" opacity=".3"/><path d="M10 21c2.21 0 4-1.79 4-4V7h4V3h-6v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z"/>');
    }
};
IconAudiotrack_TwoTone.styles = style;
IconAudiotrack_TwoTone = __decorate([
    customElement('mdui-icon-audiotrack--two-tone')
], IconAudiotrack_TwoTone);
export { IconAudiotrack_TwoTone };
