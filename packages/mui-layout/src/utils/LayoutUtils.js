export default ({ opened, collapsed, sidebar = {}, header = {} }) => {
  const { width, variant, collapsible, collapsedWidth } = sidebar;
  const { clipped } = header;
  const getSidebarWidth = () =>
    collapsible && collapsed ? collapsedWidth : width;
  const getSidebarGap = ({ persistentPushed } = {}) => {
    switch (variant) {
      case 'temporary':
        return 0;
      case 'permanent':
        return getSidebarWidth();
      case 'persistent':
        return opened && persistentPushed ? getSidebarWidth() : 0;
      default:
        return undefined;
    }
  };
  const getWidth = ({ screenFit, persistentPushed } = {}) => {
    switch (variant) {
      case 'temporary':
        return '100%';
      case 'permanent':
        return `calc(100% - ${getSidebarWidth()}px)`;
      case 'persistent':
        return opened && screenFit && persistentPushed
          ? `calc(100% - ${getSidebarWidth()}px)`
          : '100%';
      default:
        return undefined;
    }
  };
  return {
    getSidebarWidth,
    getSidebarGap,
    getWidth,
    getHeaderStyle: () => {
      if (clipped) {
        return {};
      }
      return {
        marginLeft: getSidebarGap(header),
        width: getWidth(header),
      };
    },
  };
};
