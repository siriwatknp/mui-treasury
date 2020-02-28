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
    '&:not($actionButton)': {
      marginLeft: 'auto',
      marginRight: -4,
      minWidth: 'auto',
      lineHeight: 1,
    },
  },
  actionToggled: {},
  actionButton: {},
});
