import createSidebar from './sidebar';
import SidebarAdapter from '../adapters/sidebar';

export default (ctx = {}, container = {}) => {
  const { header = {} } = ctx;
  const primarySidebar = createSidebar(ctx);
  const secondarySidebar = SidebarAdapter.normalize2ndSidebarConfigToFn(
    createSidebar,
    ctx
  );

  return {
    primarySidebar,
    secondarySidebar,
    primaryWidth: primarySidebar.calculateAffectedWidth(container),
    secondaryWidth: secondarySidebar.calculateAffectedWidth(container),
    primaryGap: primarySidebar.calculateGap(container),
    secondaryGap: secondarySidebar.calculateGap(container),
    getPrimaryStyle: theme => {
      if (!header.clipped && header.secondaryClipped) {
        return { zIndex: theme.zIndex.drawer + 20 };
      }
      return undefined;
    },
    getSecondaryStyle: theme => {
      if (header.clipped && !header.secondaryClipped) {
        return { zIndex: theme.zIndex.drawer + 20 };
      }
      return undefined;
    },
  };
};
