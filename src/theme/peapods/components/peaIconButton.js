export default ({ spacing }) => ({
  MuiIconButton: {
    root: {
      '&.MuiIconButton--small': {
        padding: spacing.unit,
      },
      '&.MuiIconButton--tiny': {
        padding: spacing.unit / 2,
      },
    },
  },
});
