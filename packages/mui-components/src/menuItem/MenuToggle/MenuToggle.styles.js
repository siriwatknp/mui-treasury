export default ({ palette }) => ({
  // Header
  header: { display: 'flex' },
  headerSelected: {
    '& > $item': {
      fontWeight: 'bold',
      color: palette.primary.main,
    },
  },
  headerExpanded: {
    '& > $item': {
      fontWeight: 'bold',
    },
  },
  item: {
    minWidth: 0,
    flexGrow: 1,
    '&:hover': {
      backgroundColor: palette.grey[100],
    },
  },
  itemArrow: {
    margin: '0 -4px 0 auto',
  },
  toggle: {
    minWidth: 48,
    '&:hover': {
      backgroundColor: palette.grey[200],
    },
  },
});
