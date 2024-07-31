import { LitElement } from 'lit';
import type { TemplateResult, CSSResultGroup } from 'lit';
export declare class IconDone extends LitElement {
    static styles: CSSResultGroup;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'mdui-icon-done': IconDone;
    }
}
