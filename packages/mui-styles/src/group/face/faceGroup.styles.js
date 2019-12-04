export default () => ({
  item: ({ size, offset = -8 }) => ({
    width: size,
    height: size,
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: offset,
    },
  }),
});
