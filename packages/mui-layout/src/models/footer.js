import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const { sidebar = {}, secondarySidebar = {}, footer = {} } = ctx;
  const { getStyle } = createSidebarEffect(ctx, footer);
  return {
    getStyle: () => {
      if (sidebar.inset && secondarySidebar.inset) {
        if (footer.insetBehavior === 'fit') {
          return {
            ...getStyle(),
            width: 'auto',
          };
        }
        return { width: 'auto' };
      }
      if (sidebar.inset && !secondarySidebar.inset) {
        if (footer.insetBehavior === 'fit') {
          return {
            ...getStyle({ secondaryDisabled: true }),
            width: 'auto',
          };
        }
        return { width: 'auto' };
      }
      if (!sidebar.inset && secondarySidebar.inset) {
        if (footer.insetBehavior === 'fit') {
          return {
            ...getStyle({ primaryDisabled: true }),
            width: 'auto',
          };
        }
        return { width: 'auto' };
      }
      return getStyle();
    },
  };
};
