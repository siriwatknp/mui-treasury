const presets = {
  createDefaultLayout() {
    return {
      navWidth: 256,
      navAnchor: 'left',
      navVariant: {
        xs: 'temporary',
        sm: 'permanent',
      },
      collapsible: {
        xs: false,
        sm: true,
      },
      collapsedWidth: 64,
      clipped: false,
      headerPosition: 'relative',
      squeezed: false,
      footerShrink: true,
    };
  },
  createFixedLayout: config => ({
    ...presets.createDefaultLayout(),
    navVariant: {
      xs: 'temporary',
      md: 'permanent',
    },
    collapsible: {
      xs: false,
      md: true,
    },
    clipped: true,
    squeezed: true,
    headerPosition: 'sticky',
    ...config,
  }),
  createContentBasedLayout: config => ({
    ...presets.createDefaultLayout(),
    navWidth: {
      sm: 200,
      md: 256,
    },
    navVariant: {
      xs: 'temporary',
      sm: 'persistent',
    },
    collapsible: false,
    ...config,
  }),
  createCozyLayout: config => ({
    ...presets.createDefaultLayout(),
    navVariant: {
      xs: 'persistent',
      sm: 'permanent',
    },
    navWidth: {
      sm: 200,
      md: 256,
      xs: 64,
    },
    collapsible: {
      xs: false,
      sm: true,
    },
    clipped: false,
    ...config,
  }),
  createMuiTreasuryLayout: config => ({
    ...presets.createDefaultLayout(),
    navWidth: 200,
    navVariant: {
      xs: 'temporary',
      md: 'permanent',
    },
    clipped: true,
    collapsible: false,
    ...config,
  }),
};

export default presets;
