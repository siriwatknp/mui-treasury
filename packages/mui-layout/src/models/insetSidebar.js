import get from 'lodash.get';

export default (ctx = {}) => {
  const { sidebar = {} } = ctx;
  const insetPosition = get(sidebar, 'insetProps.position');
  return {
    ...sidebar,
    calculateGap: ({ insetBehavior } = {}) => {
      if (insetBehavior === 'fit') {
        return sidebar.width;
      }
      return 0;
    },
    calculateAffectedWidth: () => 'auto',
    getStyle: () => ({
      width: sidebar.width,
    }),
    getBodyStyle: () => ({
      width: sidebar.width,
      position: insetPosition,
      ...(insetPosition === 'fixed' && {
        height: '100%',
        top: 0,
      }),
    }),
  };
};
