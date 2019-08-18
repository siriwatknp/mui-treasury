export const createDefaultLayout = config => ({
  navWidth: 256,
  navAnchor: 'left',
  navVariant: 'temporary',
  collapsible: false,
  collapsedWidth: 64,
  collapsedBreakpoint: 'md',
  autoCollapsedDisabled: false,
  clipped: false,
  heightAdjustmentDisabled: false,
  initialAdjustmentHeight: { xs: 56, sm: 64 }, // toolbar's height in xs is 56px
  heightAdjustmentSpeed: 144,
  headerPosition: 'relative',
  squeezed: false,
  footerShrink: true,
  ...config,
});

export const createStandardLayout = config => ({
  ...createDefaultLayout(),
  clipped: true,
  navVariant: {
    xs: 'temporary',
    sm: 'permanent',
  },
  collapsible: {
    xs: false,
    sm: true,
  },
  ...config,
});

export const createFixedLayout = config => ({
  ...createDefaultLayout(),
  navVariant: {
    xs: 'temporary',
    md: 'permanent',
  },
  collapsible: {
    xs: false,
    md: true,
  },
  squeezed: true,
  headerPosition: 'sticky',
  ...config,
});

export const createContentBasedLayout = config => ({
  ...createDefaultLayout(),
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
});

export const createCozyLayout = config => ({
  ...createDefaultLayout(),
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
});

export const createMuiTreasuryLayout = config => ({
  ...createDefaultLayout(),
  navWidth: 200,
  navVariant: {
    xs: 'temporary',
    md: 'permanent',
  },
  heightAdjustmentDisabled: true,
  clipped: true,
  collapsible: false,
  ...config,
});

export default {
  createDefaultLayout,
  createStandardLayout,
  createFixedLayout,
  createContentBasedLayout,
  createCozyLayout,
  createMuiTreasuryLayout,
};
