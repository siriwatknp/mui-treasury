import transitionStyles from './transition.styles';

export default ({ breakpoints, palette, transitions }) => ({
  paper: {
    borderColor: palette.action.hover,
    ...transitionStyles({ transitions }).root,
  },
  container: {
    flexGrow: 1,
    overflow: 'auto',
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
