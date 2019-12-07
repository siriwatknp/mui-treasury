import getDefaultScreenConfig from '../utils/getDefaultScreenConfig';
import getAddOnConfig from '../utils/getAddOnConfig';

export default {
  ...getAddOnConfig({
    collapsedBreakpoint: 'sm',
    secondaryCollapseBreakpoint: 'sm',
  }),
  xs: getDefaultScreenConfig({
    header: {
      position: 'relative',
      clipped: false,
    },
  }),
  sm: getDefaultScreenConfig({
    sidebar: {
      variant: 'persistent',
      collapsible: false,
    },
    header: {
      position: 'relative',
      clipped: false,
      persistentPushed: true,
      persistentScreenFit: false,
    },
    content: {
      persistentPushed: true,
      persistentScreenFit: false,
    },
    footer: {
      persistentPushed: true,
      persistentScreenFit: false,
    },
  }),
};
