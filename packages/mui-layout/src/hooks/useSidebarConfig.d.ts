import { ILayoutContext } from '../core/layoutContext';
import createAllSidebars from '../models/allSidebars';

declare const useSidebarConfig: () => ILayoutContext & {
  getSidebarZIndex: ReturnType<typeof createAllSidebars>['getPrimaryStyle'];
  clipped: ILayoutContext['header']['clipped'];
}

export default useSidebarConfig;
