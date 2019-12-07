import createSidebarUtils, { secondaryAdapter } from './sidebarUtils';
import createContainerUtils from './containerUtils';
import createHeaderUtils from './headerUtils';
import createSidebarLayer from './createSidebarLayer';

export default ({ content = {}, footer = {}, ...ctx }) => {
  const primarySidebar = createSidebarUtils(ctx);
  const secondarySidebar = secondaryAdapter.mapArgs(createSidebarUtils)(ctx);
  const container = createContainerUtils(ctx);
  const headerUtils = createHeaderUtils(ctx);
  const sidebarLayer = createSidebarLayer(ctx);
  return {
    getSidebarWidth: () => primarySidebar.width,
    getSidebarGap: primarySidebar.calculateGap,
    getSecondarySidebarWidth: () => secondarySidebar.width,
    getSecondarySidebarGap: secondaryAdapter.mapArgs(
      secondarySidebar.calculateGap
    ),
    getSidebarZIndex: sidebarLayer.getPrimaryStyle,
    getSecondarySidebarZIndex: sidebarLayer.getSecondaryStyle,
    getWidth: container.calculateWidth,
    getContainerMarginStyle: container.getMarginStyle,
    getContentStyle: () => ({
      ...container.getMarginStyle(content),
      width: container.calculateWidth(content),
    }),
    getFooterStyle: () => ({
      ...container.getMarginStyle(footer),
      width: container.calculateWidth(footer),
    }),
    getHeaderStyle: headerUtils.getHeaderStyle,
  };
};
