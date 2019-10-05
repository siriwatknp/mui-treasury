export default ({ spacing, palette }) => ({
  MuiFormControlLabel: {
    root: {
      marginLeft: 0,
      marginRight: spacing(3),
    },
  },
  MuiFormLabel: {
    root: {
      marginBottom: 4,
      color: palette.secondary.main,
      fontWeight: 500,
      '&$focused': {
        color: palette.secondary.main,
      },
    },
  },
});
