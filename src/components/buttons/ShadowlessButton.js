import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = theme => ({
  MuiButton: {
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
      color: theme.palette.common.white,
    },
  },
});

const ShadowlessButton = () => (
  <Button variant={'contained'} color={'primary'}>
    Button
  </Button>
);

ShadowlessButton.getTheme = getTheme;
ShadowlessButton.metadata = {
  name: 'Shadowless',
  description: 'Simple, Elegant',
};
ShadowlessButton.codeSandbox = 'https://codesandbox.io/s/2vk8l2j2wn';

export default ShadowlessButton;
