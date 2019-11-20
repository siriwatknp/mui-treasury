import getAllSidebars from './allSidebarUtils';
import createContainerUtils from './containerUtils';

export default (ctx = {}) => {
  const { header = {} } = ctx;
  const container = createContainerUtils(ctx);
  const { primarySidebar, secondarySidebar, getWidth, getGap } = getAllSidebars(
    ctx
  );
  return {
    getHeaderStyle: () => {
      if (header.clipped && header.secondaryClipped) {
        return {};
      }
      const { primaryWidth, secondaryWidth } = getWidth(header);
      const { primaryGap, secondaryGap } = getGap(container);
      if (!header.clipped && header.secondaryClipped) {
        return {
          width: container.parseWidth(primaryWidth),
          [container.getContainerMarginAttr(
            primarySidebar.anchor,
            'left'
          )]: primaryGap,
        };
      }
      if (header.clipped && !header.secondaryClipped) {
        return {
          width: container.parseWidth(secondaryWidth),
          [container.getContainerMarginAttr(
            secondarySidebar.anchor,
            'right'
          )]: secondaryGap,
        };
      }
      return {
        ...container.getMarginStyle(header),
        width: container.calculateWidth(header),
      };
    },
  };
};
