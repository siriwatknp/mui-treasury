import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = muiBaseTheme => ({
  MuiButton: {
    root: {
      borderRadius: 100,
      minHeight: 30,
      padding: '0 1em',
      '&.MuiButton--large': {
        minHeight: 39,
      },
    },
    label: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
    },
    outlined: {
      padding: '0 1em',
    },
    outlinedPrimary: {
      borderColor: 'rgb(29, 161, 242)',
      color: 'rgb(29, 161, 242)',
      '&:hover': {
        borderColor: 'rgb(29, 161, 242)',
        color: 'rgb(29, 161, 242)',
        backgroundColor: 'rgb(29, 161, 242, 0.1)',
      },
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
    containedPrimary: {
      backgroundColor: 'rgb(29, 161, 242)',
      color: muiBaseTheme.palette.common.white,
      '&:hover': {
        backgroundColor: 'rgb(29, 145, 218)',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'rgb(29, 145, 218)',
        },
      },
    },
    sizeLarge: {
      padding: '0 1em',
    },
  },
});

const TwitterButton = () => (
  <React.Fragment>
    <div>
      <Button className={'default'} color={'primary'} variant={'contained'}>
        Normal
      </Button>
      <Button
        className={'MuiButton--large'}
        color={'primary'}
        variant={'contained'}
        size={'large'}
      >
        Large Button
      </Button>
    </div>
    <div>
      <Button
        className={'default bottom'}
        variant={'outlined'}
        color={'primary'}
      >
        Normal
      </Button>
      <Button
        className={'bottom MuiButton--large'}
        variant={'outlined'}
        color={'primary'}
        size={'large'}
      >
        Large Button
      </Button>
    </div>
  </React.Fragment>
);

TwitterButton.getTheme = getTheme;
TwitterButton.metadata = {
  name: 'Twitter',
  description: 'Tweet',
};
TwitterButton.codeSandbox = 'https://codesandbox.io/s/5xj8vn1k1l';

export default TwitterButton;
