export const parseSecondaryConfig = ({
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
});

export const secondaryAdapter = {
  mapArgs: fn => args => fn(parseSecondaryConfig(args)),
};

const getSidebarWidth = ({
  collapsed,
  hidden,
  collapsible,
  width,
  collapsedWidth,
}) => {
  if (hidden) return 0;
  return collapsible && collapsed ? collapsedWidth : width;
};

export default (ctx = {}) => {
  const { sidebar = {}, opened, collapsed } = ctx;
  const width = getSidebarWidth({ ...sidebar, collapsed });
  return {
    ...sidebar,
    width,
    calculateGap: ({ persistentBehavior } = {}) => {
      switch (sidebar.variant) {
        case 'temporary':
          return 0;
        case 'permanent':
          return width;
        case 'persistent':
          return opened &&
            (persistentBehavior === 'fit' || persistentBehavior === 'flexible')
            ? width
            : 0;
        default:
          return undefined;
      }
    },
    calculateAffectedWidth: ({ persistentBehavior } = {}) => {
      switch (sidebar.variant) {
        case 'temporary':
          return '100%';
        case 'permanent':
          return width;
        case 'persistent':
          return opened && persistentBehavior === 'fit' ? width : '100%';
        default:
          return undefined;
      }
    },
  };
};
