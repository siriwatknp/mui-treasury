import getDefaultScreenConfig from './getDefaultScreenConfig';

export default {
  autoCollapseDisabled: false,
  collapsedBreakpoint: 'md',
  heightAdjustmentDisabled: false,
  xs: getDefaultScreenConfig({
    header: {
      clipped: false,
    },
  }),
  sm: getDefaultScreenConfig({
    sidebar: {
      variant: 'permanent',
      width: 64,
    },
    header: {
      clipped: false,
    },
  }),
  md: getDefaultScreenConfig({
    sidebar: {
      variant: 'permanent',
      collapsible: true,
    },
  }),
};
