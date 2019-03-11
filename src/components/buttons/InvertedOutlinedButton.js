import React from 'react';
import Color from 'color';
import Button from '@material-ui/core/Button';

export const getTheme = muiBaseTheme => ({
  MuiButton: {
    root: {
      '&.MuiButton--inverted': {
        transition: 'unset',
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.54)',
        color: 'rgba(255, 255, 255, 0.87)',
        '&:hover': {
          borderColor: '#ffffff',
          background: 'rgba(255, 255, 255, 0.24)',
          color: '#ffffff',
        },
      },
    },
    label: {
      textTransform: 'none',
      letterSpacing: '0.25px',
      fontWeight: 'bold',
    },
    outlined: {
      '&$disabled.MuiButton--inverted': {
        borderWidth: 2,
        borderColor: 'rgba(255, 255, 255, 0.38)',
        color: 'rgba(255, 255, 255, 0.38)',
      },
    },
    outlinedPrimary: {
      '&.MuiButton--inverted': {
        borderWidth: 2,
        '&:hover': {
          color: muiBaseTheme.palette.primary.main,
          borderColor: muiBaseTheme.palette.primary.main,
          backgroundColor: Color(muiBaseTheme.palette.primary.main)
            .alpha(0.1)
            .lighten(0.5)
            .string(),
        },
      },
    },
  },
});

const InvertedOutlinedButton = () => (
  <React.Fragment>
    <Button className={'MuiButton--inverted'} variant={'outlined'}>
      Default
    </Button>
    <Button
      className={'MuiButton--inverted'}
      variant={'outlined'}
      color={'primary'}
    >
      Primary
    </Button>
  </React.Fragment>
);

InvertedOutlinedButton.getTheme = getTheme;
InvertedOutlinedButton.displayName = 'Button';
InvertedOutlinedButton.metadata = {
  name: 'Inverted Outlined',
  description: 'Base on Semantic UI',
};
InvertedOutlinedButton.codeSandbox = 'https://codesandbox.io/s/380km8p2q5';

export default InvertedOutlinedButton;
