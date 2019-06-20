export default ({ breakpoints }) => ({
  MuiContainer: {
    fixed: {
      [breakpoints.up('sm')]: {
        maxWidth: 748,
      },
    },
  },
});
