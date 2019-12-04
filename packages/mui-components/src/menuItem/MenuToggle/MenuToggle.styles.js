export default ({ palette }) => ({
  // Header
  itemRoot: { display: 'flex', position: 'relative', margin: 0 },
  itemRootNesting: {},
  itemRootSelected: {
    '& > $menuItem': {
      color: palette.text.primary,
      fontWeight: 500,
    },
  },
  itemRootExpanded: {
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
  menuItemToggle: {
    margin: '0 -4px 0 auto',
  },
  toggleBtn: {
    minWidth: 48,
    color: palette.text.secondary,
    '&:hover': {
      color: palette.text.primary,
      backgroundColor: palette.grey[100],
    },
  },
  toggleContent: {},
});
