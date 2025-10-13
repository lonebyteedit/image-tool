/// <reference types="astro/client" />

declare module '*?worker' {
  const workerConstructor: {
    new (): Worker;
  };
  export default workerConstructor;
}

declare module 'libheif-js/wasm-bundle';
