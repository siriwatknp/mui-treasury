import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';
import getAddOnConfig from '../utils/getAddOnConfig';

export default {
  ...getAddOnConfig({
    collapsedBreakpoint: 'sm',
    secondaryCollapseBreakpoint: 'sm',
    heightAdjustmentDisabled: true,
  }),
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
