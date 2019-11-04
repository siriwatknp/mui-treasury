export default ({ breakpoints, palette }) => ({
  paper: {
    boxSizing: 'content-box',
    borderColor: palette.action.hover,
  },
  container: {
    flexGrow: 1,
    overflow: 'hidden auto',
  },
  collapseBtn: {
    backgroundColor: palette.grey[50],
    textAlign: 'center',
    borderRadius: 0,
    borderTop: '1px solid',
    borderColor: palette.action.hover,
    [breakpoints.up('sm')]: {
      minHeight: 40,
    },
  },
});
