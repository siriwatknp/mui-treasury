const parseSecondaryConfig = ({
  secondaryPersistentScreenFit,
  secondaryPersistentPushed,
  secondaryOpened,
  secondaryCollapsed,
} = {}) => ({
  persistentScreenFit: secondaryPersistentScreenFit,
  persistentPushed: secondaryPersistentPushed,
  opened: secondaryOpened,
  collapsed: secondaryCollapsed,
});

export const secondaryAdapter = {
  mapSecondaryArgs: fn => args => fn(parseSecondaryConfig(args)),
};

export default ({ sidebar, opened, collapsed }) => {
  const width =
    sidebar.collapsible && collapsed ? sidebar.collapsedWidth : sidebar.width;
  return {
    width,
    calculateGap: ({ persistentPushed } = {}) => {
      switch (sidebar.variant) {
        case 'temporary':
          return 0;
        case 'permanent':
          return width;
        case 'persistent':
          return opened && persistentPushed ? width : 0;
        default:
          return undefined;
      }
    },
  };
};
