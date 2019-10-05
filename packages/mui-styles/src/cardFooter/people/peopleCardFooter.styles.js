export default ({ spacing }) => ({
  divider: {
    margin: spacing(3, 0),
  },
  person: {
    display: 'inline-block',
    border: '2px solid white',
    '&:not(:first-of-type)': {
      marginLeft: -spacing(1),
    },
  },
});
