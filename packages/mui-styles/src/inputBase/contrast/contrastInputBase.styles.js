export default ({ palette, spacing }) => ({
  root: {
    padding: spacing(0, 1.5),
    borderRadius: 6,
    backgroundColor: palette.grey[100],
  },
  input: {
    fontSize: 16,
    color: palette.text.secondary,
  },
});
