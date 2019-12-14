import {
  cozyLayoutPreset,
  muiTreasuryPreset,
  fixedLayoutPreset,
  standardLayoutPreset,
  contentBasedLayoutPreset,
  defaultLayoutPreset,
} from '../presets';

describe('Layout Presets', () => {
  test('Cozy', () => {
    expect(cozyLayoutPreset).toMatchObject({
      autoCollapseDisabled: false,
      collapsedBreakpoint: 'md',
      secondaryAutoCollapseDisabled: false,
      secondaryCollapseBreakpoint: 'md',
      heightAdjustmentDisabled: false,
      xs: {
        sidebar: {
          anchor: 'left',
          variant: 'temporary',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'fixed',
          offsetHeight: 64,
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      sm: {
        sidebar: {
          anchor: 'left',
          variant: 'permanent',
          width: 64,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'fixed',
          offsetHeight: 64,
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      md: {
        sidebar: {
          anchor: 'left',
          variant: 'permanent',
          width: 256,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'fixed',
          offsetHeight: 64,
          clipped: true,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
    });
  });

  test('MuiTreasury', () => {
    expect(muiTreasuryPreset).toMatchObject({
      autoCollapseDisabled: false,
      collapsedBreakpoint: 'md',
      secondaryAutoCollapseDisabled: false,
      secondaryCollapseBreakpoint: 'md',
      heightAdjustmentDisabled: false,
      xs: {
        sidebar: {
          anchor: 'left',
          variant: 'temporary',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          offsetHeight: 64,
          position: 'sticky',
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      md: {
        sidebar: {
          anchor: 'left',
          variant: 'permanent',
          width: 200,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'sticky',
          offsetHeight: 64,
          clipped: true,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      lg: {
        sidebar: {
          anchor: 'left',
          variant: 'permanent',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'sticky',
          offsetHeight: 64,
          clipped: true,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
    });
  });

  test('Fixed', () => {
    expect(fixedLayoutPreset).toMatchObject({
      autoCollapseDisabled: false,
      secondaryAutoCollapseDisabled: false,
      collapsedBreakpoint: 'sm',
      secondaryCollapseBreakpoint: 'sm',
      heightAdjustmentDisabled: true,
      xs: {
        sidebar: {
          anchor: 'left',
          variant: 'temporary',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'sticky',
          clipped: false,
          offsetHeight: 64,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      md: {
        sidebar: {
          anchor: 'left',
          variant: 'permanent',
          width: 256,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'relative',
          offsetHeight: 64,
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
    });
  });

  test('Standard', () => {
    expect(standardLayoutPreset).toMatchObject({
      autoCollapseDisabled: false,
      secondaryAutoCollapseDisabled: false,
      heightAdjustmentDisabled: false,
      collapsedBreakpoint: 'sm',
      secondaryCollapseBreakpoint: 'sm',
      xs: {
        sidebar: {
          anchor: 'left',
          variant: 'temporary',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'sticky',
          offsetHeight: 64,
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      sm: {
        sidebar: {
          anchor: 'left',
          variant: 'permanent',
          width: 256,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'relative',
          offsetHeight: 64,
          clipped: true,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
    });
  });

  test('Content-based', () => {
    expect(contentBasedLayoutPreset).toMatchObject({
      autoCollapseDisabled: false,
      secondaryAutoCollapseDisabled: false,
      heightAdjustmentDisabled: false,
      collapsedBreakpoint: 'sm',
      secondaryCollapseBreakpoint: 'sm',
      xs: {
        sidebar: {
          anchor: 'left',
          variant: 'temporary',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'relative',
          offsetHeight: 64,
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      sm: {
        sidebar: {
          anchor: 'left',
          variant: 'persistent',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'relative',
          offsetHeight: 64,
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'flexible',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'flexible',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'flexible',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
    });
  });

  test('default', () => {
    expect(defaultLayoutPreset).toMatchObject({
      autoCollapseDisabled: false,
      collapsedBreakpoint: 'md',
      secondaryAutoCollapseDisabled: false,
      secondaryCollapseBreakpoint: 'md',
      heightAdjustmentDisabled: false,
      xs: {
        sidebar: {
          anchor: 'left',
          variant: 'temporary',
          width: 256,
          collapsible: false,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'relative',
          offsetHeight: 64,
          clipped: false,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
      md: {
        sidebar: {
          anchor: 'left',
          variant: 'persistent',
          width: 256,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'fixed',
            hiddenBreakpoint: 'sm',
          },
        },
        secondarySidebar: {
          anchor: 'right',
          variant: 'persistent',
          width: 244,
          collapsible: true,
          collapsedWidth: 64,
          hidden: false,
          inset: false,
          insetProps: {
            position: 'sticky',
            hiddenBreakpoint: 'sm',
          },
        },
        header: {
          position: 'sticky',
          offsetHeight: 64,
          clipped: true,
          secondaryClipped: false,
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'fit',
        },
        content: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
        },
        footer: {
          persistentBehavior: 'fit',
          secondaryPersistentBehavior: 'none',
          insetBehavior: 'fit',
          secondaryInsetBehavior: 'none',
        },
      },
    });
  });
});
