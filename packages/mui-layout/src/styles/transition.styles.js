export default ({ transitions }) => ({
  root: {
    transition: transitions.create(['all'], {
      easing: transitions.easing.easeOut,
      duration: transitions.duration.leavingScreen,
    }),
  },
  all: {
    transitionProperty: 'all !important',
  },
  smooth: {
    transition: transitions.create(['all'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  },
});
