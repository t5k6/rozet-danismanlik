// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="@emotion/react/types/css-prop" />
import { IGatsbyImageData } from "gatsby-plugin-image";

type CSSModule = Record<string, string>;

// type shims for CSS modules

declare module "*.module.scss" {
  const cssModule: CSSModule;
  export = cssModule;
}

declare module "*.ico" {
  const ico: string;
  export default ico;
}

declare module "rehype-react" {
  type RehypeOptions = {
    createElement: any;
    components: any;
  };
  class RehypeReact {
    Compiler: any;
    constructor(options: RehypeOptions);
  }
  export default RehypeReact;
}
