export default ({ palette }) => ({
  overline: {
    textTransform: 'uppercase',
    color: '#9e9e9e',
    marginBottom: '0.35em',
    fontWeight: 'bold',
    letterSpacing: '2px',
    fontSize: 16,
    display: 'inline-block',
  },
  heading: {
    fontSize: 24,
    fontWeight: 900,
    marginBottom: '0.72em',
  },
  body: {
    fontSize: 16,
    color: palette.text.primary,
    lineHeight: 1.75,
  },
});
