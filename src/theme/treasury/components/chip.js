export default ({ muiBaseTheme, white }) => ({
  MuiChip: {
    root: {
      paddingTop: muiBaseTheme.spacing.unit / 2,
      paddingBottom: muiBaseTheme.spacing.unit / 2,
      height: 'auto',
      transition: muiBaseTheme.transitions.create(['transform']),
      '&:hover': {
        transform: 'scale(1.1)',
      },
    },
    label: {
      color: white.text,
      fontWeight: 'bold',
    },
    deleteIconColorPrimary: {
      color: white.text,
      fontSize: 16,
    },
  },
});
