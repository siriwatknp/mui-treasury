export default ({ spacing }) => ({
  MuiIconButton: {
    root: {
      '&.MuiIconButton--small': {
        padding: spacing(1),
      },
      '&.MuiIconButton--tiny': {
        padding: spacing(0.5),
      },
    },
  },
});
