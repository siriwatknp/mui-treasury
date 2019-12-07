import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';
import getAddOnConfig from '../utils/getAddOnConfig';

export default {
  ...getAddOnConfig(),
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
