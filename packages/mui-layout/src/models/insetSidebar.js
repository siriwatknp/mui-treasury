import get from 'lodash.get';

export default (ctx = {}) => {
  const { sidebar = {} } = ctx;

  const insetProps = get(sidebar, 'insetProps', {});

  return {
    getWidth: () => {
      if (sidebar.hidden) return 0;
      return sidebar.width;
    },
    getBodyStyle: () => ({
      position: insetProps.position,
      ...(insetProps.position === 'fixed' && {
        height: '100%',
      }),
      ...(insetProps.position === 'sticky' && {
        top: insetProps.top,
        width: '100%',
      }),
    }),
  };
};
