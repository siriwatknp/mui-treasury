import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';

export default {
  autoCollapseDisabled: false,
  collapsedBreakpoint: 'md',
  heightAdjustmentDisabled: false,
  xs: getDefaultScreenConfig({
    header: {
      position: 'relative',
      clipped: false,
    },
  }),
  md: getDefaultScreenConfig({
    sidebar: {
      variant: 'persistent',
      collapsible: true,
    },
    header: {
      position: 'sticky',
    },
  }),
};
