import { AttributePart } from 'lit/html.js';
import { PartInfo } from 'lit/directive.js';
import { AsyncDirective } from 'lit/async-directive.js';
export { AnimateController } from './animate-controller.js';
export type CSSValues = {
    [index: string]: string | number;
};
export type CSSPropertiesList = string[];
export type Options = {
    keyframeOptions?: KeyframeAnimationOptions;
    properties?: CSSPropertiesList;
    disabled?: boolean;
    guard?: () => unknown;
    id?: unknown;
    inId?: unknown;
    in?: Keyframe[];
    out?: Keyframe[];
    stabilizeOut?: boolean;
    skipInitial?: boolean;
    onStart?: (animate: Animate) => void;
    onComplete?: (animate: Animate) => void;
    onFrames?: (animate: Animate) => Keyframe[] | undefined;
};
export declare const animationFrame: () => Promise<unknown>;
export declare const flyBelow: {
    transform: string;
    opacity: number;
}[];
export declare const flyAbove: {
    transform: string;
    opacity: number;
}[];
export declare const flyLeft: {
    transform: string;
    opacity: number;
}[];
export declare const flyRight: {
    transform: string;
    opacity: number;
}[];
export declare const none: {}[];
export declare const fadeOut: {
    opacity: number;
}[];
export declare const fade: {
    opacity: number;
}[];
export declare const fadeIn: {
    opacity: number;
}[];
export declare const fadeInSlow: ({
    opacity: number;
    offset?: undefined;
} | {
    opacity: number;
    offset: number;
})[];
export declare const transformProps: {
    [p: string]: (a: number, b: number) => {
        value?: number;
        transform?: string;
        overrideFrom?: {
            [k: string]: string;
        };
    };
};
export declare const defaultKeyframeOptions: KeyframeAnimationOptions;
export declare const defaultCssProperties: CSSPropertiesList;
/**
 * `animate` directive class. Animates a node's position between renders.
 */
export declare class Animate extends AsyncDirective {
    private _hostHasUpdated;
    private _host?;
    private _fromValues?;
    private _parentNode;
    private _nextSibling;
    private _shouldAnimate;
    private _previousValue;
    private _styles?;
    element: HTMLElement;
    shouldLog: boolean;
    animatingProperties?: CSSValues;
    frames?: Keyframe[];
    webAnimation?: Animation;
    options: Options;
    optionsOrCallback?: (() => Options) | Options;
    finished: Promise<void>;
    private _resolveFinished?;
    constructor(part: PartInfo);
    createFinished(): void;
    resolveFinished(): Promise<void>;
    render(_options?: (() => Options) | Options): symbol;
    getController(): import("./animate-controller.js").AnimateController | undefined;
    isDisabled(): boolean | undefined;
    update(part: AttributePart, [options]: Parameters<this['render']>): symbol;
    private _setOptions;
    private _measure;
    private _canStart;
    hostUpdate(): void;
    hostUpdated(): Promise<void>;
    resetStyles(): void;
    commitStyles(): void;
    reconnected(): void;
    disconnected(): Promise<void>;
    prepare(): void;
    start(): void;
    didFinish(didAnimate: boolean): void;
    private _getAncestors;
    protected get isHostRendered(): boolean;
    private _calculateKeyframeOptions;
    private _applyAncestorAdjustments;
    protected calculateKeyframes(from: CSSValues, to: CSSValues, center?: boolean): Keyframe[] | undefined;
    protected animate(frames: Keyframe[] | undefined, options?: KeyframeAnimationOptions | undefined): Promise<boolean>;
    protected isAnimating(): boolean | undefined;
    log(message: string, data?: unknown): void;
}
/**
 * The `animate` directive animates a node's layout between renders.
 * It will perform a "tweening" animation between the two states based on
 * the options given. In addition, elements can animate when they initially
 * render to DOM and when they are removed.
 *
 * Options include:
 * * animationOptions:  configure animation via standard KeyframeAnimationOptions
 * * properties: list of properties to animate, defaults to
 * ['left', 'top','width', 'height', 'opacity', 'color', 'background']
 * * disabled: disables animation
 * * guard: function producing values that must change for the `animate` to run
 * * in: keyframes to use when animating in
 * * out: keyframes to use when animating out
 * * skipInitial: skip animating in the first time
 * * id: used to link to other `animate`s via `inId`
 * * inId: id of the `animate` to render from when animating in
 * * onStart: run when the `animate` starts
 * * onComplete: run when the `animate` completes
 * * onFrames: run when the frames are produces, use to modify frames
 */
export declare const animate: (_options?: Options | (() => Options) | undefined) => import("lit-html/directive.js").DirectiveResult<typeof Animate>;
//# sourceMappingURL=animate.d.ts.map