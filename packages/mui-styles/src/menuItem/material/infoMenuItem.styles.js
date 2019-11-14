export default ({ palette }) => ({
  root: {
    minWidth: 0,
    minHeight: 42,
    fontSize: '0.875rem',
    color: palette.text.secondary,
  },
  button: {
    '&:hover': {
      backgroundColor: palette.grey[100],
      color: palette.text.primary,
    },
  },
  info: {
    marginLeft: 'auto',
    fontSize: 14,
    color: palette.text.hint,
  },
});
