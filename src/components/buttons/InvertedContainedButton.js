import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = muiBaseTheme => ({
  MuiButton: {
    root: {
      '&.MuiButton--inverted': {
        transition: 'unset',
        borderWidth: 2,
        borderColor: '#ffffff',
        color: '#ffffff',
        '&:hover': {
          background: '#ffffff',
          color: muiBaseTheme.palette.text.primary,
        },
      },
    },
    label: {
      textTransform: 'none',
      letterSpacing: '0.25px',
      fontWeight: 'bold',
    },
    contained: {
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
      '&.MuiButton--inverted': {
        backgroundColor: 'unset',
        borderStyle: 'solid',
        color: '#ffffff',
      },
    },
    containedPrimary: {
      '&.MuiButton--inverted': {
        borderColor: muiBaseTheme.palette.primary.main,
        color: muiBaseTheme.palette.primary.main,
        '&:hover': {
          background: muiBaseTheme.palette.primary.main,
          color: muiBaseTheme.palette.common.white,
        },
      },
    },
    outlined: {
      '&$disabled.MuiButton--inverted': {
        borderColor: '#ffffff',
        color: '#ffffff',
      },
    },
  },
});

const InvertedContainedButton = () => (
  <React.Fragment>
    <Button className={'MuiButton--inverted'} variant={'contained'}>
      Default
    </Button>
    <Button
      className={'MuiButton--inverted'}
      variant={'contained'}
      color={'primary'}
    >
      Primary
    </Button>
  </React.Fragment>
);

InvertedContainedButton.getTheme = getTheme;
InvertedContainedButton.displayName = 'Button';
InvertedContainedButton.metadata = {
  name: 'Inverted Contained',
  description: 'Base on Semantic UI',
};
InvertedContainedButton.codeSandbox = 'https://codesandbox.io/s/nnx40v45om';

export default InvertedContainedButton;
