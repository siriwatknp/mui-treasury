import get from 'lodash.get';
import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const { header = {}, sidebar = {}, secondarySidebar = {} } = ctx;
  const { getStyle } = createSidebarEffect(ctx, header);
  return {
    getStyle: theme => {
      const isHeaderOnTop =
        (header.clipped && header.position !== 'static') ||
        (header.secondaryClipped && header.position !== 'static');
      const layerStyle = isHeaderOnTop
        ? { zIndex: get(theme, 'zIndex.drawer', 1200) + 10 }
        : undefined;
      if (
        (header.clipped && header.secondaryClipped) ||
        (sidebar.inset && secondarySidebar.inset)
      ) {
        return layerStyle;
      }
      if (
        (!header.clipped && header.secondaryClipped) ||
        secondarySidebar.inset
      ) {
        return {
          ...layerStyle,
          ...getStyle({ secondaryDisabled: true }),
        };
      }
      if ((header.clipped && !header.secondaryClipped) || sidebar.inset) {
        return {
          ...layerStyle,
          ...getStyle({ primaryDisabled: true }),
        };
      }
      return {
        ...layerStyle,
        ...getStyle(),
      };
    },
  };
};
