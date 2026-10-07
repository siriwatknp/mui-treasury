export const families = {
  Button: {
    title: 'Button family',
    members: [
      {
        component: 'MuiButton',
        variants: ['contained', 'outlined', 'text'],
        sizes: ['small', 'medium', 'large'],
        colorChecks: {
          contained: [
            { prop: 'backgroundColor', token: 'primary-main', label: 'bg' },
            { prop: 'color', token: 'primary-contrastText', label: 'text' },
          ],
          outlined: [
            { prop: 'color', token: 'primary-main', label: 'text' },
            { prop: 'borderColor', token: 'primary-main', alpha: 0.5, label: 'border' },
          ],
          text: [{ prop: 'color', token: 'primary-main', label: 'text' }],
        },
        states: ['default', 'hover', 'active', 'focusVisible', 'disabled'],
      },
      { component: 'MuiIconButton', sizes: ['small', 'medium', 'large'] },
    ],
  },
  Switch: {
    title: 'Switch family',
    members: [
      {
        // multi-slot: the cascade lives on track/thumb/switchBase (see the wiring).
        // The demos gallery (default) renders the docs demos under the theme; --verify
        // checks the track colours per on/off state.
        component: 'MuiSwitch',
        variants: ['track'],
        sizes: ['small', 'medium'],
        colorChecks: {
          track: [
            { prop: 'backgroundColor', token: 'primary-main', label: 'on', slot: 'track' },
          ],
        },
        colorProps: { track: 'checked=true' },
        states: ['default', 'checked', 'disabled'],
      },
    ],
  },
};
