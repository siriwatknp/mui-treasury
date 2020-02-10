export default () => ({
  root: ({ bgColor = 'rgba(0, 0, 0, 0.08)' }) => ({
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    backgroundColor: bgColor,
  }),
});
