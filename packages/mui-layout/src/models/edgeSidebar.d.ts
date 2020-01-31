import { ILayoutContext } from '../core/layoutContext';

declare const edgeSidebar: (ctx?: ILayoutContext) => {
  getWidth: () => number;
};

export default edgeSidebar;
