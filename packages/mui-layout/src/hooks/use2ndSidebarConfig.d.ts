import SidebarAdapter from '../adapters/sidebar';
import { ILayoutContext } from '../core/layoutContext';
import createAllSidebars from '../models/allSidebars';

declare const use2ndSidebarConfig: () => ReturnType<ReturnType<typeof SidebarAdapter>['mapSecondaryConfig']> & {
  getSidebarZIndex: ReturnType<typeof createAllSidebars>['getSecondaryStyle'];
  clipped: ILayoutContext['header']['secondaryClipped'];
};

export default use2ndSidebarConfig;
