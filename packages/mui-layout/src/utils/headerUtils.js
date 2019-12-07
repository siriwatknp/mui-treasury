import getAllSidebars from './allSidebarUtils';
import createContainerUtils from './containerUtils';

export default (ctx = {}) => {
  const { header = {} } = ctx;
  const container = createContainerUtils(ctx);
  const { primarySidebar, secondarySidebar, getWidth, getGap } = getAllSidebars(
    ctx
  );
  return {
    getHeaderStyle: theme => {
      const isHeaderOnTop =
        (header.clipped && header.position !== 'static') ||
        (header.secondaryClipped && header.position !== 'static');
      const layerStyle = isHeaderOnTop
        ? { zIndex: theme.zIndex.drawer + 10 }
        : undefined;
      if (header.clipped && header.secondaryClipped) {
        return layerStyle;
      }
      const { primaryWidth, secondaryWidth } = getWidth(header);
      const { primaryGap, secondaryGap } = getGap(container);
      if (!header.clipped && header.secondaryClipped) {
        return {
          ...layerStyle,
          width: container.parseWidth(primaryWidth),
          [container.getContainerMarginAttr(
            primarySidebar.anchor,
            'left'
          )]: primaryGap,
        };
      }
      if (header.clipped && !header.secondaryClipped) {
        return {
          ...layerStyle,
          width: container.parseWidth(secondaryWidth),
          [container.getContainerMarginAttr(
            secondarySidebar.anchor,
            'right'
          )]: secondaryGap,
        };
      }
      return {
        ...layerStyle,
        ...container.getMarginStyle(header),
        width: container.calculateWidth(header),
      };
    },
  };
};
