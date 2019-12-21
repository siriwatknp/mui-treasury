import get from 'lodash.get';
import useLayoutCtx from './useLayoutCtx';
import createAllSidebars from '../models/allSidebars';

export default () => {
  const ctx = useLayoutCtx();
  const allSidebars = createAllSidebars(ctx);
  return {
    ...ctx,
    getSidebarZIndex: allSidebars.getPrimaryStyle,
    clipped: get(ctx, ['header', 'clipped']),
  };
};
