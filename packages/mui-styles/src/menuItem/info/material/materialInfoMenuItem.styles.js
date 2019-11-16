export default ({ palette }) => ({
  root: {
    marginBottom: 0,
    minWidth: 0,
    minHeight: 42,
    fontSize: '0.875rem',
    color: palette.text.secondary,
    '&$selected': {
      backgroundColor: 'rgba(0,0,0,0)',
      color: palette.text.primary,
      '&:hover': {
        backgroundColor: palette.grey[100],
      },
    },
    '&$focusVisible': {
      backgroundColor: palette.grey[100],
    },
  },
  selected: {},
  focusVisible: {},
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
