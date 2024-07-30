/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { ReactiveControllerHost } from 'lit';
import { Animate, Options } from './animate.js';
export declare const controllerMap: WeakMap<ReactiveControllerHost, AnimateController>;
/**
 * AnimateController can be used to provide default configuration options to all
 * `animate()` directives in a given component.
 *
 * It also provides control over all the `animate()` animations within a given
 * component, for example, `this.animateController.pause()` pauses all animations.
 */
export declare class AnimateController {
    host: ReactiveControllerHost;
    defaultOptions: Options;
    startPaused: boolean;
    disabled: boolean;
    onComplete?: () => void;
    constructor(host: ReactiveControllerHost, options: {
        defaultOptions?: Options;
        startPaused?: boolean;
        disabled?: boolean;
        onComplete?: () => void;
    });
    /**
     * Set of active `animate()` directives in the host component
     */
    clients: Set<Animate>;
    protected pendingComplete: boolean;
    add(animate: Animate): Promise<void>;
    remove(animate: Animate): void;
    /**
     * Pauses all animations running in the host component.
     */
    pause(): void;
    /**
     * Plays all active animations in the host component.
     */
    play(): void;
    cancel(): void;
    finish(): void;
    /**
     * Toggles the play/pause state of all active `animate()` animations in the host component.
     */
    togglePlay(): void;
    /**
     * Returns true if the host component has any active `animate()` animations.
     */
    get isAnimating(): boolean;
    /**
     * Returns true if the host component has any playing `animate()` animations.
     */
    get isPlaying(): boolean;
    finished(): Promise<void>;
}
//# sourceMappingURL=animate-controller.d.ts.map