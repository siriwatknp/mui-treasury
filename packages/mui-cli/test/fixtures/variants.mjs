/** The component × variant matrix the browser tests exercise (generated or docs-demo renders, never hand-written setups). */
export const variants = {
  MuiButton: [
    'size=small,variant=text',
    'size=small,variant=outlined',
    'size=small,variant=contained',
    'size=medium,variant=text',
    'size=medium,variant=outlined',
    'size=medium,variant=contained',
    'size=large,variant=text',
    'size=large,variant=outlined',
    'size=large,variant=contained'
  ],
  MuiIconButton: [
    'size=small',
    'size=medium',
    'size=large'
  ],
  MuiAccordionSummary: [
    'base'
  ],
  MuiAutocomplete: [
    'size=medium',
    'size=small',
    'base'
  ],
  MuiAvatar: [
    'base'
  ],
  MuiChip: [
    'size=medium',
    'size=small'
  ],
  MuiAlert: [
    'base'
  ],
  MuiCheckbox: [
    'size=small',
    'size=medium',
    'size=large'
  ],
  MuiRadio: [
    'size=small',
    'size=medium',
    'size=large'
  ],
  MuiSlider: [
    'orientation=horizontal,size=medium',
    'orientation=horizontal,size=small'
  ],
  MuiBadge: [
    'variant=standard',
    'variant=dot'
  ],
  MuiLinearProgress: [
    'base'
  ],
  MuiBottomNavigation: [
    'base'
  ],
  MuiSnackbarContent: [
    'base'
  ],
  MuiListItemButton: [
    'dense=false',
    'dense=true'
  ],
  MuiPaginationItem: [
    'size=small',
    'size=medium',
    'size=large'
  ],
  MuiFab: [
    'size=small,variant=circular',
    'size=medium,variant=circular',
    'size=large,variant=circular',
    'size=small,variant=extended',
    'size=medium,variant=extended',
    'size=large,variant=extended'
  ],
  MuiToolbar: [
    'variant=regular',
    'variant=dense'
  ],
  MuiTableCell: [
    'size=medium',
    'size=small'
  ],
  MuiToggleButton: [
    'size=small',
    'size=medium',
    'size=large'
  ],
  MuiSwitch: [
    'size=medium',
    'size=small'
  ],
  MuiSelect: [
    'size=medium',
    'size=small'
  ],
  MuiTab: [
    'base'
  ],
  MuiTooltip: [
    'base'
  ],
  MuiMenuItem: [
    'dense=false',
    'dense=true'
  ],
  MuiOutlinedInput: [
    'size=medium',
    'size=small'
  ],
  MuiFilledInput: [
    'size=medium',
    'size=small'
  ],
  MuiInput: [
    'size=medium',
    'size=small'
  ]
};

/** Render one variant for a browser test: the same path the commands use (captureWith → hold + interact when needed). */
export async function captureVariant(run, helpers, component, propsKey, cfg) {
  const { captureWith, renderFor, slotsOf } = await import('../../src/lib/renders.mjs');
  const { parsePropsKey } = await import('../../src/lib/match.mjs');
  const slot = cfg.checkEdits?.[0]?.slot ?? 'root';
  const render = renderFor(component, { props: parsePropsKey(propsKey), slot });
  return captureWith(run, helpers, { component, render, target: slot }, { slots: await slotsOf(component), ...cfg });
}
