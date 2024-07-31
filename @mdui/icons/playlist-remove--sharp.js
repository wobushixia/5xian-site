import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconPlaylistRemove_Sharp = class IconPlaylistRemove_Sharp extends LitElement {
    render() {
        return svgTag('<path d="M14 10H3v2h11v-2zm0-4H3v2h11V6zM3 16h7v-2H3v2zm11.41 6L17 19.41 19.59 22 21 20.59 18.41 18 21 15.41 19.59 14 17 16.59 14.41 14 13 15.41 15.59 18 13 20.59 14.41 22z"/>');
    }
};
IconPlaylistRemove_Sharp.styles = style;
IconPlaylistRemove_Sharp = __decorate([
    customElement('mdui-icon-playlist-remove--sharp')
], IconPlaylistRemove_Sharp);
export { IconPlaylistRemove_Sharp };
