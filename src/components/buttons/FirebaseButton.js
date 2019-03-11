import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = theme => ({
  MuiButton: {
    root: {
      borderRadius: 8,
    },
    text: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    contained: {
      boxShadow: 'none',
      '&$focusVisible': {
        boxShadow: theme.shadows[0],
      },
      '&:active': {
        boxShadow: theme.shadows[0],
      },
    },
    containedPrimary: {
      backgroundColor: '#039be5',
      color: theme.palette.common.white,
      '&:hover': {
        backgroundColor: '#0388ca',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: '#0388ca',
        },
      },
    },
    label: {
      textTransform: 'none',
      letterSpacing: '0.5px',
      fontWeight: 500,
    },
  },
});

const FirebaseButton = () => (
  <React.Fragment>
    <Button className={'default'}>Default</Button>
    <Button variant={'contained'} color={'primary'}>
      Primary
    </Button>
  </React.Fragment>
);

FirebaseButton.getTheme = getTheme;
FirebaseButton.displayName = 'Button';
FirebaseButton.metadata = {
  name: 'Firebase',
  description: "We're on fire",
};
FirebaseButton.codeSandbox = 'https://codesandbox.io/s/ojnxlj1ry6';

export default FirebaseButton;
