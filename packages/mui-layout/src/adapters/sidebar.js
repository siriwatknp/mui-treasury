const SidebarAdapter = () => ({});

SidebarAdapter.mapSecondaryConfig = ({
  secondarySidebar,
  secondaryPersistentBehavior,
  secondaryOpened,
  setSecondaryOpened,
  secondaryCollapsed,
  setSecondaryCollapsed,
  secondaryClipped,
  secondaryAutoCollapseDisabled,
  secondaryCollapseBreakpoint,
  getSecondarySidebarWidth,
  getSecondarySidebarGap,
  getSecondarySidebarZIndex,
  getSecondaryInsetSidebarStyle,
  getSecondaryInsetSidebarBodyStyle,
  ...rest
} = {}) => ({
  ...rest,
  sidebar: secondarySidebar,
  persistentBehavior: secondaryPersistentBehavior,
  opened: secondaryOpened,
  collapsed: secondaryCollapsed,
  clipped: secondaryClipped,
  setOpened: setSecondaryOpened,
  setCollapsed: setSecondaryCollapsed,
  autoCollapseDisabled: secondaryAutoCollapseDisabled,
  collapseBreakpoint: secondaryCollapseBreakpoint,
  getSidebarWidth: getSecondarySidebarWidth,
  getSidebarGap: getSecondarySidebarGap,
  getSidebarZIndex: getSecondarySidebarZIndex,
  getInsetSidebarStyle: getSecondaryInsetSidebarStyle,
  getInsetSidebarBodyStyle: getSecondaryInsetSidebarBodyStyle,
});
SidebarAdapter.normalize2ndSidebarConfigToFn = (fn, ctx) =>
  fn(SidebarAdapter.mapSecondaryConfig(ctx));

export default SidebarAdapter;
