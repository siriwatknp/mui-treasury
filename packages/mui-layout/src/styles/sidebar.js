export default ({ breakpoints, palette, transitions }) => ({
  paper: {
    transition: transitions.create(['width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
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
    borderColor: 'rgba(0,0,0,0.12)',
    [breakpoints.up('sm')]: {
      minHeight: 40,
    },
  },
});
