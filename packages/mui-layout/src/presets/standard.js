import getDefaultScreenConfig from './getDefaultScreenConfig';

export default {
  autoCollapseDisabled: false,
  collapsedBreakpoint: 'sm',
  heightAdjustmentDisabled: false,
  SecondaryAutoCollapsedDisabled: false,
  secondaryCollapsedBreakpoint: 'sm',
  secondaryHeightAdjustmentDisabled: false,
  xs: getDefaultScreenConfig({
    header: {
      position: 'sticky',
      clipped: false,
    },
  }),
  sm: getDefaultScreenConfig({
    sidebar: {
      variant: 'permanent',
      collapsible: true,
    },
    header: {
      position: 'relative',
    },
  }),
  md: getDefaultScreenConfig({
    sidebar: {
      variant: 'permanent',
      collapsible: true,
    },
    header: {
      position: 'relative',
    },
  }),
};
