export default ({ spacing, palette }) => ({
  // MuiFormControl is in ./peaTextField
  MuiFormControlLabel: {
    root: { marginRight: spacing.unit * 3 },
    label: { marginLeft: -spacing.unit / 2 },
  },
  MuiFormLabel: {
    root: {
      color: palette.secondary.main,
      fontWeight: 500,
      '&$focused': {
        color: palette.secondary.main,
      },
    },
  },
});
