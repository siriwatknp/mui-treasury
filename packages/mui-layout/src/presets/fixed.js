import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';

export default {
  autoCollapseDisabled: false,
  collapsedBreakpoint: 'sm',
  heightAdjustmentDisabled: true,
  xs: getDefaultScreenConfig({
    header: {
      position: 'sticky',
      clipped: false,
    },
  }),
  md: getDefaultScreenConfig({
    sidebar: {
      variant: 'permanent',
      collapsible: true,
    },
    header: {
      position: 'relative',
      clipped: false,
    },
  }),
};
