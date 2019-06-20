export default ({ muiBaseTheme, white }) => ({
  MuiChip: {
    root: {
      paddingTop: muiBaseTheme.spacing(0.5),
      paddingBottom: muiBaseTheme.spacing(0.5),
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
