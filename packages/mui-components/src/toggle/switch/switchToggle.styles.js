export default ({ palette }) => ({
  root: {
    display: 'inline-flex',
    verticalAlign: 'middle',
    minWidth: 28,
    minHeight: 28,
    justifyContent: 'center',
    alignItems: 'center',
    color: palette.text.secondary,
    '& svg': {
      fontSize: '1.25rem',
    },
  },
  button: {},
  toggled: {
    color: palette.text.primary,
  },
});
