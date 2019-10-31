export const filledHelperTextStyles = ({ spacing }) => {
  const space = spacing(1); // default = 8;
  return {
    root: {
      lineHeight: '2em',
    },
    contained: {
      marginTop: space / 4,
    },
  };
};

export const filledInputStyles = ({ spacing }) => {
  const space = spacing(1); // default = 8;
  return {
    root: {
      fontSize: 16,
      borderRadius: space / 2,
      backgroundColor: 'rgba(0,0,0,0.04)',
      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.08)',
      },
    },
    error: {
      backgroundColor: '#fff5f5',
      '&:hover': {
        backgroundColor: '#ffecec',
      },
      '&$focused': {
        backgroundColor: '#ffecec',
      },
    },
    focused: {},
  };
};
