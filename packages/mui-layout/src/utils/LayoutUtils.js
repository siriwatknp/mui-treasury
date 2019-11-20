import createSidebarUtils, { secondaryAdapter } from './sidebarUtils';
import createContainerUtils from './containerUtils';
import createHeaderUtils from './headerUtils';

export default ({ content = {}, footer = {}, ...ctx }) => {
  const primarySidebar = createSidebarUtils(ctx);
  const secondarySidebar = secondaryAdapter.mapArgs(createSidebarUtils)(ctx);
  const sidebarWidth = primarySidebar.width;
  const secondarySidebarWidth = secondarySidebar.width;
  const container = createContainerUtils(ctx);
  const headerUtils = createHeaderUtils(ctx);
  return {
    getSidebarWidth: () => sidebarWidth,
    getSidebarGap: primarySidebar.calculateGap,
    getSecondarySidebarWidth: () => secondarySidebarWidth,
    getSecondarySidebarGap: secondaryAdapter.mapArgs(
      secondarySidebar.calculateGap
    ),
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
