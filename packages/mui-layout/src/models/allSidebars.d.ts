import { Theme } from '@material-ui/core';
import { CSSProperties } from 'react';
import SidebarAdapter from '../adapters/sidebar';
import { ILayoutContext } from '../core/layoutContext';
import createEdgeEffect from './edgeEffect';
import createInsetEffect from './insetEffect';

declare const allSidebars: (ctx?: ILayoutContext) => {
  isEdgeAndInset: boolean;
  isPrimaryEdge: boolean;
  isPrimaryInset: boolean;
  isSecondaryEdge: boolean;
  isSecondaryInset: boolean;
  mainEffect: ReturnType<typeof createInsetEffect> | ReturnType<typeof createEdgeEffect>;
  subEffect: ReturnType<typeof createInsetEffect> | ReturnType<typeof createEdgeEffect>;
  mapSecondaryConfig: ReturnType<typeof SidebarAdapter>['mapSecondaryConfig'];
  getPrimaryStyle: (theme: Theme) => Pick<CSSProperties, 'zIndex'> | undefined;
  getSecondaryStyle: (theme: Theme) => Pick<CSSProperties, 'zIndex'> | undefined;
  getHeaderStyle: (theme: Theme) => Pick<CSSProperties, 'zIndex'> | undefined;
};

export default allSidebars;
