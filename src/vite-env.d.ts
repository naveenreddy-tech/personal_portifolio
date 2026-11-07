/// <reference types="vite/client" />

declare module "gsap-trial/SplitText" {
  export class SplitText {
    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];
    constructor(target: any, vars?: any);
    revert(): void;
  }
}

declare module "gsap-trial/ScrollSmoother" {
  export class ScrollSmoother {
    static create(vars: any): ScrollSmoother;
    static refresh(safe?: boolean): void;
    static get(): ScrollSmoother;
    scrollTop(val?: number): number;
    paused(state?: boolean): boolean;
    scrollTo(target: any, smooth?: boolean, position?: string): void;
  }
}
