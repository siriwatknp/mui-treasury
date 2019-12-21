import get from 'lodash.get';
import useLayoutCtx from './useLayoutCtx';
import SidebarAdapter from '../adapters/sidebar';
import createAllSidebars from '../models/allSidebars';

export default () => {
  const ctx = useLayoutCtx();
  const allSidebars = createAllSidebars(ctx);
  const parsedCtx = SidebarAdapter.mapSecondaryConfig(ctx);
  return {
    ...parsedCtx,
    getSidebarZIndex: allSidebars.getSecondaryStyle,
    clipped: get(parsedCtx, ['header', 'secondaryClipped']),
  };
};
