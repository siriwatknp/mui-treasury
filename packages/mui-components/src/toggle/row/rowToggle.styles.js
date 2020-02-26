export default () => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  rootSelected: {},
  listItem: {},
  listItemSelected: {},
  action: {
    flexShrink: 0,
    alignSelf: 'stretch',
    '&:last-child': {
      marginLeft: 'auto',
    },
  },
});
