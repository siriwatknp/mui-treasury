import get from 'lodash.get';
import createEdgeEffect from './edgeEffect';
import createInsetEffect from './insetEffect';
import SidebarAdapter from '../adapters/sidebar';

export default (ctx = {}) => {
  const { header = {}, sidebar = {}, secondarySidebar = {} } = ctx;

  const incrementZIndex = (theme, plus) => ({
    zIndex: get(theme, 'zIndex.drawer', 1200) + plus,
  });

  const isNotStatic = header.position !== 'static';
  const isAboveMainSidebar = header.clipped && isNotStatic;
  const isAboveSubSidebar = header.secondaryClipped && isNotStatic;
  const isAboveSomeSidebars = isAboveMainSidebar || isAboveSubSidebar;

  const mainEffect = sidebar.inset
    ? createInsetEffect(ctx)
    : createEdgeEffect(ctx);
  const subEffect = SidebarAdapter.normalize2ndSidebarConfigToFn(
    secondarySidebar.inset ? createInsetEffect : createEdgeEffect,
    ctx
  );
  return {
    isEdgeAndInset:
      (sidebar.inset && !secondarySidebar.inset) ||
      (!sidebar.inset && secondarySidebar.inset),
    isPrimaryEdge: !sidebar.inset,
    isPrimaryInset: sidebar.inset,
    isSecondaryEdge: !secondarySidebar.inset,
    isSecondaryInset: secondarySidebar.inset,
    mainEffect,
    subEffect,
    mapSecondaryConfig: SidebarAdapter.mapSecondaryConfig,
    getPrimaryStyle: theme => {
      if (!header.clipped && header.secondaryClipped) {
        return incrementZIndex(theme, 20);
      }
      return undefined;
    },
    getSecondaryStyle: theme => {
      if (header.clipped && !header.secondaryClipped) {
        return incrementZIndex(theme, 20);
      }
      return undefined;
    },
    getHeaderStyle: theme => {
      if (isAboveSomeSidebars) {
        return incrementZIndex(theme, 10);
      }
      return undefined;
    },
  };
};
