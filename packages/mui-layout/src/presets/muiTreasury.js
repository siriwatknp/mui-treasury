import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';
import getAddOnConfig from '../utils/getAddOnConfig';

export default {
  ...getAddOnConfig(),
  xs: getDefaultScreenConfig({
    header: {
      position: 'sticky',
      clipped: false,
    },
  }),
  md: getDefaultScreenConfig({
    sidebar: {
      variant: 'permanent',
      width: 200,
      // collapsible: true,
    },
    header: {
      position: 'sticky',
    },
  }),
  lg: getDefaultScreenConfig({
    sidebar: {
      variant: 'permanent',
      // collapsible: true,
    },
    header: {
      position: 'sticky',
    },
  }),
};
