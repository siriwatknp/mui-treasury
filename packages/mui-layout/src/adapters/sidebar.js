const SidebarAdapter = () => ({});

SidebarAdapter.mapSecondaryConfig = ({
  secondarySidebar,
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

  // header, footer, content
  secondaryPersistentBehavior,
  secondaryInsetBehavior,
  ...rest
} = {}) => ({
  ...rest,
  sidebar: secondarySidebar,
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

  // header, footer, content
  persistentBehavior: secondaryPersistentBehavior,
  insetBehavior: secondaryInsetBehavior,
});
SidebarAdapter.normalize2ndSidebarConfigToFn = (fn, ctx) =>
  fn(SidebarAdapter.mapSecondaryConfig(ctx));

export default SidebarAdapter;
