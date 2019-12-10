import get from 'lodash.get';
import useLayoutCtx from './useLayoutCtx';
import SidebarAdapter from '../adapters/sidebar';

export default () => {
  const ctx = useLayoutCtx();
  const parsedCtx = SidebarAdapter.mapSecondaryConfig(ctx);
  return {
    ...parsedCtx,
    clipped: get(parsedCtx, ['header', 'secondaryClipped']),
  };
};
