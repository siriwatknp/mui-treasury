import { CSSProperties } from 'react';
import { ILayoutContext } from '../core/layoutContext';

declare const insetSidebar: (ctx?: ILayoutContext) => {
  getWidth: () => number;
  getDrawerAnchor: () => ILayoutContext['sidebar']['insetProps']['drawerAnchor'];
  getBodyStyle: () => Pick<CSSProperties, 'position' | 'top' | 'height' | 'width'>;
}

export default insetSidebar;
