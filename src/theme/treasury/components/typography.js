export default ({ muiBaseTheme: { palette } }) => ({
  MuiTypography: {
    body1: {
      color: palette.text.secondary,
      '& b': {
        color: palette.text.primary,
      },
    },
    body2: {
      color: palette.text.secondary,
      '& b': {
        color: palette.text.primary,
      },
    },
  },
});
