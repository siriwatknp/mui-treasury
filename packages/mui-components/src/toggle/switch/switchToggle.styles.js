export default ({ palette }) => ({
  root: {
    display: 'inline-flex',
    verticalAlign: 'middle',
    minWidth: 40,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    color: palette.text.secondary,
  },
  toggled: {
    color: palette.text.primary,
  },
});
