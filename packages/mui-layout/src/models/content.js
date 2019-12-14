import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const { sidebar = {} } = ctx;
  const { getStyle } = createSidebarEffect(ctx, ctx.content);
  return {
    // todo write content.test
    getStyle: () => (sidebar.inset ? undefined : getStyle()),
  };
};
