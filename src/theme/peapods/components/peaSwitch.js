/* eslint-disable max-len */
export default ({ palette }) => ({
  MuiSwitch: {
    root: {
      '&.PeaSwitch-root': {
        '& [class*="PrivateSwitchBase-checked"]': {
          padding: 6,
          transform: 'translateX(60%)',
        },
      },
      '& .PeaIcon': {
        width: 24,
        height: 24,
        '& svg': {
          verticalAlign: 'top',
        },
      },
    },
    colorSecondary: {
      '&$checked': {
        color: palette.common.white,
        '& + $bar': {
          background:
            'linear-gradient(90deg, rgba(92,199,153,1) 0%, rgba(0,255,176,1) 50%)',
          opacity: 1,
          boxShadow: `0 0 8px 0 ${palette.primary.main}`,
        },
      },
    },
    checked: {},
    bar: {
      width: 48,
      height: 24,
      marginLeft: -28,
      marginTop: -12,
      borderRadius: 50,
    },
    icon: {
      marginLeft: -16,
    },
  },
});
