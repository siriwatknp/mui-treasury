import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const { sidebar = {}, secondarySidebar = {}, footer = {} } = ctx;
  const { getStyle } = createSidebarEffect(ctx, footer);
  return {
    getStyle: () => {
      if (sidebar.inset && secondarySidebar.inset) {
        return {
          ...getStyle({
            primaryDisabled: footer.insetBehavior !== 'fit',
            secondaryDisabled: footer.secondaryInsetBehavior !== 'fit',
          }),
          width: 'auto',
        };
      }
      if (sidebar.inset && !secondarySidebar.inset) {
        return {
          ...getStyle({
            primaryDisabled: footer.insetBehavior !== 'fit',
          }),
        };
      }
      if (!sidebar.inset && secondarySidebar.inset) {
        return {
          ...getStyle({
            secondaryDisabled: footer.secondaryInsetBehavior !== 'fit',
          }),
        };
      }
      return getStyle();
    },
  };
};
