import { __decorate } from "tslib";
import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { style } from '@mdui/shared/icons/shared/style.js';
import { svgTag } from '@mdui/shared/icons/shared/svg-tag.js';
let IconHtml_Rounded = class IconHtml_Rounded extends LitElement {
    render() {
        return svgTag('<path d="M21 15c-.55 0-1-.45-1-1V9.75c0-.41.34-.75.75-.75s.75.34.75.75v3.75h1.75c.41 0 .75.34.75.75s-.34.75-.75.75H21zm-5-4.51h1v3.76c0 .41.34.75.75.75s.75-.34.75-.75V10c0-.55-.45-1-1-1H13c-.55 0-1 .45-1 1v4.25c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1v2.75c0 .41.34.75.75.75s.75-.34.75-.75v-2.76zM5 9.75C5 9.34 4.66 9 4.25 9s-.75.34-.75.75V11h-2V9.75c0-.41-.34-.75-.75-.75S0 9.34 0 9.75v4.5c0 .41.34.75.75.75s.75-.34.75-.75V12.5h2v1.75c0 .41.34.75.75.75s.75-.34.75-.75v-4.5zm5.25.75c.41 0 .75-.34.75-.75S10.66 9 10.25 9h-3.5c-.41 0-.75.34-.75.75s.34.75.75.75h1v3.75c0 .41.34.75.75.75s.75-.34.75-.75V10.5h1z"/>');
    }
};
IconHtml_Rounded.styles = style;
IconHtml_Rounded = __decorate([
    customElement('mdui-icon-html--rounded')
], IconHtml_Rounded);
export { IconHtml_Rounded };