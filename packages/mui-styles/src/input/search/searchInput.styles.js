export default ({ spacing, palette }) => {
  // ATTENTION!
  // you can customize some important variables here!!
  const backgroundColor = palette.grey[100];
  const space = spacing(1); // default = 8;
  const borderRadius = 0;
  const iconColor = palette.grey[500];
  // end of variables
  return {
    root: {
      backgroundColor,
      borderRadius,
      padding: `${space}px ${space * 2}px`,
    },
    input: {
      fontSize: 16,
    },
    adornedStart: {
      '& > *:first-child': {
        // * is the icon at the beginning of input
        fontSize: 20,
        color: iconColor,
        marginRight: space,
      },
    },
  };
};
