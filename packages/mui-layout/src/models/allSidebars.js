import createSidebar from './sidebar';
import SidebarAdapter from '../adapters/sidebar';

export default (ctx = {}) => {
  const { header = {} } = ctx;
  const primarySidebar = createSidebar(ctx);
  const secondarySidebar = SidebarAdapter.normalize2ndSidebarConfigToFn(
    createSidebar,
    ctx
  );

  return {
    primarySidebar,
    secondarySidebar,
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
    getTargetProps: (target = {}) => ({
      primaryWidth: primarySidebar.calculateAffectedWidth(target),
      secondaryWidth: secondarySidebar.calculateAffectedWidth(target),
      primaryGap: primarySidebar.calculateGap(target),
      secondaryGap: secondarySidebar.calculateGap(target),
    }),
  };
};
