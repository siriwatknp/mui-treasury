export default ({ spacing }) => {
  return {
    parent: ({ before, after, size = 1 }) => ({
      '& > *:not(:first-child)': {
        marginLeft: spacing(size),
      },
      '& > *:first-child': {
        marginLeft: spacing(before),
      },
      '& > *:last-child': {
        marginRight: spacing(after),
      },
    }),
  };
};
