export default () => ({
  root: ({ padding = 12, color }) => ({
    color,
    padding,
  }),
  label: ({ childSize = 24 }) => ({
    '& > *': {
      fontSize: childSize,
    },
  }),
});
