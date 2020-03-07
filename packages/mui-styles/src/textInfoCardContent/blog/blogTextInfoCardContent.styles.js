export default ({ spacing }) => {
  const family =
    '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif';
  return {
    overline: {
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontSize: 12,
      marginBottom: '0.875em',
      display: 'inline-block',
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: '0.35em',
      fontFamily: family,
    },
    body: {
      marginBottom: spacing(2),
      fontSize: '0.8rem',
      letterSpacing: '0.00938em',
      fontFamily: family,
    },
    button: {
      backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      boxShadow: '0px 4px 32px rgba(252, 56, 56, 0.4)',
      borderRadius: 100,
      paddingLeft: 24,
      paddingRight: 24,
      color: '#ffffff',
    },
  };
};
