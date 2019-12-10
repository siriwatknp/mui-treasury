export default (ctx = {}) => {
  const { sidebar = {}, opened, collapsed } = ctx;

  const getSidebarWidth = () => {
    if (sidebar.hidden) return 0;
    return sidebar.collapsible && collapsed
      ? sidebar.collapsedWidth
      : sidebar.width;
  };

  const sidebarWidth = getSidebarWidth();
  return {
    width: sidebarWidth,
    calculateGap: ({ persistentBehavior } = {}) => {
      switch (sidebar.variant) {
        case 'temporary':
          return 0;
        case 'permanent':
          return sidebarWidth;
        case 'persistent':
          return opened &&
            (persistentBehavior === 'fit' || persistentBehavior === 'flexible')
            ? sidebarWidth
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
          return `calc(100% - ${sidebarWidth}px)`;
        case 'persistent':
          return opened && persistentBehavior === 'fit'
            ? `calc(100% - ${sidebarWidth}px)`
            : '100%';
        default:
          return undefined;
      }
    },
  };
};
