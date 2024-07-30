import { AttributePart } from 'lit/html.js';
import { PartInfo } from 'lit/directive.js';
import { AsyncDirective } from 'lit/async-directive.js';
interface Positionables {
    readonly bottom: number;
    readonly height: number;
    readonly left: number;
    readonly right: number;
    readonly top: number;
    readonly width: number;
}
type Ref = {
    value: HTMLElement;
};
export type TargetCallbackOrRef = (() => HTMLElement) | Ref;
export type Positions = Array<keyof Positionables>;
export declare class Position extends AsyncDirective {
    private _host?;
    private _element?;
    private _targetCallbackOrRef;
    private _positions?;
    constructor(part: PartInfo);
    render(_targetCallbackOrRef: TargetCallbackOrRef, _positions: Positions): symbol;
    update(part: AttributePart, [target, positions]: Parameters<this['render']>): symbol;
    hostUpdated(): void;
    private _position;
}
/**
 * Positions and sizes the element on which the `position()` directive is used
 * relative to the given target element.
 */
export declare const position: (_targetCallbackOrRef: TargetCallbackOrRef, _positions: Positions) => import("lit-html/directive.js").DirectiveResult<typeof Position>;
export {};
//# sourceMappingURL=position.d.ts.map