import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const sidebarEffect = createSidebarEffect(ctx, ctx.content);
  return {
    getStyle: () => ({
      ...sidebarEffect.getMarginStyle(),
      width: sidebarEffect.getAffectedWidth(),
    }),
  };
};
