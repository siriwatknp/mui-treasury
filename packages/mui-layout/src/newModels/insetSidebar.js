import get from 'lodash.get';

export default (ctx = {}) => {
  const { sidebar = {} } = ctx;
  if (
    Object.keys(sidebar).length === 0 &&
    process.env.NODE_ENV !== 'production'
  ) {
    console.warn(
      'Sidebar is empty! please make sure that you pass { sidebar: {...} } to config'
    );
  }
  const insetProps = get(sidebar, 'insetProps', {});

  return {
    getWidth: () => {
      if (sidebar.hidden) return 0;
      return sidebar.width;
    },
    getBodyStyle: () => ({
      width: sidebar.width,
      position: insetProps.position,
      ...(insetProps.position === 'fixed' && {
        height: '100%',
      }),
      ...(insetProps.position === 'sticky' && {
        top: insetProps.top,
      }),
    }),
  };
};
