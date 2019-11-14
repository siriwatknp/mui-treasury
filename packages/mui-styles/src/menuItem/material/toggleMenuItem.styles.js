export default ({ palette }) => ({
  root: {
    minWidth: 0,
    minHeight: 42,
    fontSize: '0.875rem',
    color: palette.text.secondary,
    '&:hover': {
      backgroundColor: palette.grey[100],
      color: palette.text.primary,
    },
  },
  symbol: {
    marginLeft: 'auto',
    marginRight: -3,
  },
});
