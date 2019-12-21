export default (ctx = {}) => {
  const { sidebar = {}, collapsed } = ctx;

  if (
    Object.keys(sidebar).length === 0 &&
    process.env.NODE_ENV !== 'production'
  ) {
    console.warn(
      'Sidebar is empty! please make sure that you pass { sidebar: {...} } to config'
    );
  }

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
