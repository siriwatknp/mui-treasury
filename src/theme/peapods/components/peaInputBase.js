export default ({ muiBaseTheme }) => {
  // ATTENTION!
  // you can customize some important variables here!!
  const backgroundColor = muiBaseTheme.palette.grey[100];
  const space = muiBaseTheme.spacing.unit; // default = 8;
  const borderRadius = 100;
  const iconColor = muiBaseTheme.palette.grey[500];
  // end of variables
  return {
    MuiInputBase: {
      root: {
        '&.PeaSearchInput-root': {
          backgroundColor,
          borderRadius,
          padding: `${space}px ${space * 2}px`,
          '& .material-icons': {
            fontSize: 20,
            color: iconColor,
            '&:first-child': {
              marginRight: space,
            },
          },
        },
      },
    },
  };
};
