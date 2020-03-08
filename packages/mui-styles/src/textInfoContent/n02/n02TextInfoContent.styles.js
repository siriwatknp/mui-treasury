export default ({ palette }) => ({
  overline: {
    textTransform: 'uppercase',
    color: palette.text.secondary,
    fontWeight: 'bold',
    letterSpacing: '1px',
    fontSize: 14,
    display: 'inline-block',
  },
  heading: {
    fontSize: 24,
    fontWeight: 900,
    marginBottom: '0.4em',
  },
  body: {
    fontSize: 18,
    color: palette.text.secondary,
  },
});
