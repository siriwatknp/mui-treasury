import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const sidebarEffect = createSidebarEffect(ctx, ctx.footer);
  return {
    getStyle: () => ({
      ...sidebarEffect.getMarginStyle(),
      width: sidebarEffect.getAffectedWidth(),
    }),
  };
};
