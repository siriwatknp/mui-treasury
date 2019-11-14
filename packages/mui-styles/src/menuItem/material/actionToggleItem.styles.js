export default ({ palette }) => ({
  // Header
  root: { display: 'flex', position: 'relative', margin: 0 },
  selected: {
    '& > $menuItem': {
      color: palette.text.primary,
      fontWeight: 500,
    },
  },
  expanded: {
    '& > $menuItem': {
      color: palette.text.primary,
    },
  },
  menuItem: {
    minWidth: 0,
    minHeight: 42,
    flexGrow: 1,
    fontSize: '0.875rem',
    color: palette.text.secondary,
    '&:hover': {
      backgroundColor: palette.grey[100],
      color: palette.text.primary,
    },
  },
  toggleBtn: {
    minWidth: 48,
    color: palette.text.secondary,
    '&:hover': {
      color: palette.text.primary,
      backgroundColor: palette.grey[100],
    },
  },
});
