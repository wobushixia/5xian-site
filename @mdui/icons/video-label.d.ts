import { LitElement } from 'lit';
import type { TemplateResult, CSSResultGroup } from 'lit';
export declare class IconVideoLabel extends LitElement {
    static styles: CSSResultGroup;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'mdui-icon-video-label': IconVideoLabel;
    }
}
