export default ({ spacing }) => {
  const space = spacing(1); // default = 8;
  const backgroundColor = '#F1F3F4';
  const borderRadius = 100; // rounded
  const inputPadding = space / 4;
  return {
    root: {
      backgroundColor,
      borderRadius,
      padding: inputPadding,
    },
    icon: {
      padding: `${space / 2}px ${space}px`,
      borderRadius,
    },
  };
};
