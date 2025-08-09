declare module 'vanta/dist/vanta.cells.min.js' {
  interface VantaEffect {
    destroy(): void;
    setOptions(options: any): void;
  }

  interface VantaOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    color1?: number;
    color2?: number;
    size?: number;
    speed?: number;
    zoom?: number;
  }

  function CELLS(options: VantaOptions): VantaEffect;
  export default CELLS;
}

declare module 'three' {
  export * from 'three';
}
