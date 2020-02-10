export default () => ({
  root: ({ bgColor = 'rgba(0, 0, 0, 0.08)' }) => ({
    width: '100%',
    paddingBottom: '56.25%',
    clipPath: 'polygon(0 0, 100% 0%, 100% 84%, 0% 100%)',
    backgroundColor: bgColor,
  }),
});
