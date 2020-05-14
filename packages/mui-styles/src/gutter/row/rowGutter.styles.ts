export default () => {
  return {
    parent: ({ before, after, size = '0.5rem' }) => ({
      '& > *:not(:first-child)': {
        marginLeft: size,
      },
      '& > *:first-child': {
        marginLeft: before,
      },
      '& > *:last-child': {
        marginRight: after,
      },
    }),
  };
};
