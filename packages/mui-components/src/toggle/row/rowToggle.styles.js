export default ({ palette }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  rootSelected: {},
  listItem: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    borderRadius: 3,
    color: palette.text.secondary,
    margin: 0,
  },
  listItemSelected: {
    color: palette.text.primary,
    backgroundColor: 'rgba(0,0,0,0.08)',
  },
  action: {
    flexShrink: 0,
    alignSelf: 'stretch',
    display: 'inline-flex',
    alignItems: 'center',
    '&:last-child': {
      marginLeft: 'auto',
    },
    '&:not($actionButton)': {
      marginLeft: 'auto',
      marginRight: -4,
      minWidth: 'auto',
      lineHeight: 1,
    },
    color: palette.text.secondary,
    '& svg': {
      fontSize: '1.25rem',
    },
  },
  actionToggled: {
    color: palette.text.primary,
  },
  actionButton: {
    borderRadius: 3,
    minWidth: 44,
    minHeight: 40,
  },
});
