/* eslint-disable max-len */
import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = muiBaseTheme => ({
  MuiButton: {
    root: {
      '&.MuiButton--chubby': {
        borderRadius: 50,
      },
      '&.MuiButton--gradient': {
        minWidth: 200,
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        background:
          'linear-gradient(to right, #FFC371, #FF5F6D)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
        '&:hover': {
          transform: 'scale(1.1)',
        },
      },
    },
    label: {
      color: muiBaseTheme.palette.common.white,
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
    },
    contained: {
      minHeight: 30,
      boxShadow: muiBaseTheme.shadows[0],
      '&$focusVisible': {
        boxShadow: muiBaseTheme.shadows[0],
      },
      '&:active': {
        boxShadow: muiBaseTheme.shadows[0],
      },
      '&$disabled': {
        boxShadow: muiBaseTheme.shadows[0],
      },
    },
  },
});

const GradientButton = () => (
  <React.Fragment>
    <Button className={'MuiButton--gradient'}>Cool</Button>
    <Button className={'MuiButton--gradient MuiButton--chubby'}>Chubby</Button>
  </React.Fragment>
);

GradientButton.getTheme = getTheme;
GradientButton.displayName = 'Button';
GradientButton.metadata = {
  name: 'Gradient',
  description: 'Welcome to the new trend',
};
GradientButton.codeSandbox = 'https://codesandbox.io/s/3q8xm89p35';

export default GradientButton;
