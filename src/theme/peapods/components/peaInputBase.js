export default ({ palette, spacing }) => {
  // ATTENTION!
  // you can customize some important variables here!!
  const backgroundColor = palette.grey[100];
  const space = spacing.unit; // default = 8;
  const borderRadius = 100;
  const iconColor = palette.grey[500];
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
