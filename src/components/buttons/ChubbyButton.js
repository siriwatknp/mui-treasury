import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = () => ({
  MuiButton: {
    root: {
      borderRadius: 50,
    },
    contained: {
      boxShadow: 'none',
    },
  },
});

const ChubbyButton = () => <Button variant={'contained'}>Button</Button>;

ChubbyButton.getTheme = getTheme;
ChubbyButton.displayName = 'Button';
ChubbyButton.metadata = {
  name: 'Chubby',
  description: 'Cute',
};
ChubbyButton.codeSandbox = 'https://codesandbox.io/s/oxq34415v9';

export default ChubbyButton;
