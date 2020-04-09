const SidebarAdapter = () => ({});

SidebarAdapter.mapSecondaryConfig = ({
  secondarySidebar,
  secondaryOpen,
  setSecondaryOpen,
  secondaryCollapsed,
  setSecondaryCollapsed,
  secondaryClipped,
  secondaryAutoCollapseDisabled,
  secondaryCollapseBreakpoint,
  secondaryInsetHiddenBreakpoint,
  secondaryInsetHiddenDisabled,
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
  open: secondaryOpen,
  collapsed: secondaryCollapsed,
  clipped: secondaryClipped,
  setOpen: setSecondaryOpen,
  setCollapsed: setSecondaryCollapsed,
  autoCollapseDisabled: secondaryAutoCollapseDisabled,
  collapseBreakpoint: secondaryCollapseBreakpoint,
  insetHiddenBreakpoint: secondaryInsetHiddenBreakpoint,
  insetHiddenDisabled: secondaryInsetHiddenDisabled,
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
