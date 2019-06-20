export default ({ spacing, palette }) => ({
  // MuiFormControl is in ./peaTextField
  MuiFormControlLabel: {
    root: { marginRight: spacing(3) },
    label: { marginLeft: -spacing(0.5) },
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
