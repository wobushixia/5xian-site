import { LitElement } from 'lit';
import type { TemplateResult, CSSResultGroup } from 'lit';
export declare class IconRadio extends LitElement {
    static styles: CSSResultGroup;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'mdui-icon-radio': IconRadio;
    }
}
