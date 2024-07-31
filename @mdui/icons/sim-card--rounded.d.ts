import { LitElement } from 'lit';
import type { TemplateResult, CSSResultGroup } from 'lit';
export declare class IconSimCard_Rounded extends LitElement {
    static styles: CSSResultGroup;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'mdui-icon-sim-card--rounded': IconSimCard_Rounded;
    }
}