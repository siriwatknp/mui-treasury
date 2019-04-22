export default {
  createDefaultLayout: () => ({
    navWidth: 256,
    navPermanent: true,
    navVariant: 'permanent',
    collapsible: true,
    collapsedWidth: 64,
    collapsed: false,
    clipped: false,
    breakpoint: {
      value: 'xs',
      variant: 'temporary',
    },
  }),
  createFixedLayout: config => ({
    navWidth: 256,
    navPermanent: true,
    navVariant: 'permanent',
    collapsible: true,
    collapsedWidth: 64,
    clipped: true,
    breakpoint: {
      value: 'sm',
      variant: 'persistent',
      squeeze: true,
    },
    ...config,
  }),
  createContentBasedLayout: config => ({
    navWidth: {
      sm: 200,
      md: 256,
    },
    navPermanent: false,
    navVariant: 'persistent',
    collapsible: false,
    breakpoint: {
      value: 'xs',
      variant: 'temporary',
    },
    ...config,
  }),
  createCozyLayout: config => ({
    navWidth: {
      sm: 200,
      md: 256,
    },
    navPermanent: true,
    navVariant: 'permanent',
    collapsible: true,
    collapsedWidth: 64,
    clipped: true,
    breakpoint: {
      value: 'xs',
      variant: 'temporary',
    },
    ...config,
  }),
};
