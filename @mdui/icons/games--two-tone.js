import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconGames_TwoTone = class IconGames_TwoTone extends LitElement {
    render() {
        return svgTag('<path d="M11 17.33V20h2v-2.67l-1-1zm2-10.66V4h-2v2.67l1 1zM16.33 12l1 1H20v-2h-2.67zM4 11v2h2.67l1-1-1-1z" opacity=".3"/><path d="M2 9v6h5.5l3-3-3-3H2zm4.67 4H4v-2h2.67l1 1-1 1zM22 9h-5.5l-3 3 3 3H22V9zm-2 4h-2.67l-1-1 1-1H20v2zm-5 3.5-3-3-3 3V22h6v-5.5zM13 20h-2v-2.67l1-1 1 1V20zM9 7.5l3 3 3-3V2H9v5.5zM11 4h2v2.67l-1 1-1-1V4z"/>');
    }
};
IconGames_TwoTone.styles = style;
IconGames_TwoTone = __decorate([
    customElement('mdui-icon-games--two-tone')
], IconGames_TwoTone);
export { IconGames_TwoTone };