import get from 'lodash.get';
import createSidebar from './sidebar';
import createInsetSidebar from './insetSidebar';
import SidebarAdapter from '../adapters/sidebar';

export default (ctx = {}) => {
  const { header = {}, sidebar = {}, secondarySidebar: secSidebar = {} } = ctx;
  const primarySidebar = sidebar.inset
    ? createInsetSidebar(ctx)
    : createSidebar(ctx);
  const secondarySidebar = SidebarAdapter.normalize2ndSidebarConfigToFn(
    secSidebar.inset ? createInsetSidebar : createSidebar,
    ctx
  );

  const getZIndexStyle = theme => ({
    zIndex: get(theme, 'zIndex.drawer', 1200) + 20,
  });

  return {
    primarySidebar,
    secondarySidebar,
    getPrimaryStyle: theme => {
      if (!header.clipped && header.secondaryClipped) {
        return getZIndexStyle(theme);
      }
      return undefined;
    },
    getSecondaryStyle: theme => {
      if (header.clipped && !header.secondaryClipped) {
        return getZIndexStyle(theme);
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
