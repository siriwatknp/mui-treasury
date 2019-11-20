import createSidebarUtils, { secondaryAdapter } from './sidebarUtils';

export default (ctx = {}) => {
  const primarySidebar = createSidebarUtils(ctx);
  const secondarySidebar = secondaryAdapter.mapArgs(createSidebarUtils)(ctx);
  const getWidth = (container = {}) => {
    const primaryWidth = primarySidebar.calculateAffectedWidth(container);
    const secondaryWidth = secondaryAdapter.mapArgs(
      secondarySidebar.calculateAffectedWidth
    )(container);
    return {
      primaryWidth,
      secondaryWidth,
    };
  };
  const getGap = (container = {}) => {
    return {
      primaryGap: primarySidebar.calculateGap(container),
      secondaryGap: secondaryAdapter.mapArgs(secondarySidebar.calculateGap)(
        container
      ),
    };
  };
  return {
    primarySidebar,
    secondarySidebar,
    getWidth,
    getGap,
  };
};
