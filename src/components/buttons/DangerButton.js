import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = () => ({
  MuiButton: {
    contained: {
      '&.MuiButton--danger': {
        color: '#ffffff',
        background: '#ff5252',
        '&:hover': {
          background: '#e04848',
        },
      },
    },
  },
});

const DangerButton = () => (
  <Button className={'MuiButton--danger'} variant={'contained'}>
    Button
  </Button>
);

DangerButton.getTheme = getTheme;
DangerButton.metadata = {
  name: 'Danger',
  description: 'Best for warning',
};
DangerButton.codeSandbox = 'https://codesandbox.io/s/rjw762k27m';

export default DangerButton;
