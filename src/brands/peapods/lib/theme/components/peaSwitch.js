/* eslint-disable max-len */
export default ({ palette }) => ({
  MuiSwitch: {
    root: {
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
      },
    },
    checked: {},
  },
});
