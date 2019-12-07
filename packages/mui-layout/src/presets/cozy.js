import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';
import getAddOnConfig from '../utils/getAddOnConfig';

export default {
  ...getAddOnConfig(),
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
