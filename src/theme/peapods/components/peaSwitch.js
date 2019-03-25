/* eslint-disable max-len */
export default ({ palette }) => ({
  MuiSwitch: {
    colorSecondary: {
      '&$checked': {
        color: palette.common.white,
        '& + $bar': {
          background:
            'linear-gradient(90deg, rgba(92,199,153,1) 0%, rgba(0,255,176,1) 50%)',
        },
      },
    },
    checked: {
      '& .PeaIcon': {
        width: 24,
        height: 24,
      },
      '& + $bar': {
        opacity: 1,
        boxShadow: `0 0 8px 0 ${palette.primary.main}`,
      },
    },
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
