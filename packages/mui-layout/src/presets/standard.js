import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';
import getAddOnConfig from '../utils/getAddOnConfig';

export default {
  ...getAddOnConfig({
    collapsedBreakpoint: 'sm',
    secondaryCollapseBreakpoint: 'sm',
  }),
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
