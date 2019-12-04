export default ({ spacing }) => ({
  divider: {
    marginBottom: spacing(3),
  },
  person: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -spacing(1),
    },
  },
});
