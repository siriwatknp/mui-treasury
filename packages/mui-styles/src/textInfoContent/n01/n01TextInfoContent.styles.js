export default ({ palette }) => ({
  overline: {
    textTransform: 'uppercase',
    color: palette.text.secondary,
    letterSpacing: '1px',
    fontSize: 12,
    marginBottom: '0.875em',
    display: 'inline-block',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: '0.4em',
  },
  body: {
    fontSize: 16,
    color: 'rgba(0,0,0,0.72)',
  },
});
