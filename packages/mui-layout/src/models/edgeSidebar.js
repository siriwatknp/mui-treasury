export default (ctx = {}) => {
  const { sidebar = {}, collapsed } = ctx;

  const getSidebarWidth = () => {
    if (sidebar.hidden) return 0;
    return sidebar.collapsible && collapsed
      ? sidebar.collapsedWidth || 0
      : sidebar.width || 0;
  };

  return {
    getWidth: getSidebarWidth,
  };
};
