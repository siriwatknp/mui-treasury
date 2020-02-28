export default ({ palette }) => ({
  root: {
    minWidth: 0,
    minHeight: 42,
    flexGrow: 1,
    margin: 0,
    fontSize: '0.875rem',
    color: palette.text.secondary,
    '&:hover': {
      backgroundColor: palette.grey[100],
      color: palette.text.primary,
    },
  },
  selected: {
    '&.Mui-selected': {
      backgroundColor: 'transparent',
      color: palette.text.primary,
      fontWeight: 500,
      '&:hover, &:focus': {
        backgroundColor: palette.grey[100],
      },
    },
  },
});
