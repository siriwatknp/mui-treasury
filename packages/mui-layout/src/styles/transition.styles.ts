import { Theme } from "@material-ui/core/styles"

export default ({ transitions }: Theme) => ({
  root: {
    transition: transitions.create(['all'], {
      easing: transitions.easing.easeOut,
      duration: transitions.duration.leavingScreen,
    }),
    transitionProperty: 'all !important',
  },
  smooth: {
    transition: transitions.create(['all'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  },
});
