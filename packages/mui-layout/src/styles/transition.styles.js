export default ({ transitions }) => ({
  root: {
    transition: `${transitions.create(['width', 'margin', 'transform'], {
      easing: transitions.easing.easeOut,
      duration: transitions.duration.leavingScreen,
    })} !important`,
  },
});
