import get from 'lodash.get';
import createSidebarEffect from './sidebarEffect';

export default (ctx = {}) => {
  const { header = {}, sidebar = {}, secondarySidebar = {} } = ctx;
  const { getStyle } = createSidebarEffect(ctx, header);
  return {
    getStyle: theme => {
      const isHeaderOverPrimarySidebar =
        header.clipped && header.position !== 'static';
      const isHeaderOverSecondarySidebar =
        header.secondaryClipped && header.position !== 'static';
      const isHeaderOnTop =
        isHeaderOverPrimarySidebar || isHeaderOverSecondarySidebar;
      const layerStyle = isHeaderOnTop
        ? { zIndex: get(theme, 'zIndex.drawer', 1200) + 10 }
        : undefined;
      if (sidebar.inset && secondarySidebar.inset) {
        return {};
      }
      if (
        !sidebar.inset &&
        isHeaderOverPrimarySidebar &&
        secondarySidebar.inset
      ) {
        return layerStyle;
      }
      if (
        sidebar.inset &&
        !secondarySidebar.inset &&
        isHeaderOverSecondarySidebar
      ) {
        return layerStyle;
      }
      if (header.clipped && header.secondaryClipped) {
        return layerStyle;
      }
      if (!header.clipped && header.secondaryClipped) {
        return {
          ...layerStyle,
          ...getStyle({ secondaryDisabled: true }),
        };
      }
      if (header.clipped && !header.secondaryClipped) {
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
