import get from 'lodash.get';

const parseUnit = amount =>
  typeof amount === 'number' ? `${amount}px` : amount;

export default (ctx = {}) => {
  const { sidebar = {}, header = {} } = ctx;

  const insetProps = get(sidebar, 'insetProps', {});

  return {
    getWidth: () => {
      if (sidebar.hidden) return 0;
      return sidebar.width;
    },
    getDrawerWidth: () => insetProps.drawerWidth,
    getDrawerAnchor: () => insetProps.drawerAnchor,
    getBodyStyle: () => ({
      position: insetProps.position,
      top: insetProps.top,
      ...(insetProps.position === 'fixed' && {
        height: '100%',
      }),
      ...(insetProps.position === 'absolute' && {
        height: `calc(100vh - ${parseUnit(header.offsetHeight)})`,
      }),
    }),
  };
};
