import get from 'lodash.get';
import useLayoutCtx from './useLayoutCtx';

export default () => {
  const ctx = useLayoutCtx();
  return {
    ...ctx,
    clipped: get(ctx, ['header', 'clipped']),
  };
};
