import React from 'react';
import Button from '@material-ui/core/Button';

export const getTheme = theme => ({
  MuiButton: {
    root: {
      lineHeight: '20px',
      padding: '6px 12px',
      minHeight: 'auto',
      color: '#24292e',
      '& svg': {
        fontSize: 16,
        marginLeft: -2,
        marginRight: theme.spacing.unit / 2,
      },
    },
    label: {
      textTransform: 'none',
      fontWeight: 600,
    },
    contained: {
      transition: 'none',
      boxShadow: 'none',
      border: '1px solid rgba(27,31,35,.2)',
      backgroundPosition: '-1px -1px',
      backgroundRepeat: 'repeat-x',
      backgroundSize: '110% 110%',
      backgroundColor: '#eff3f6',
      backgroundImage: 'linear-gradient(-180deg,#fafbfc,#eff3f6 90%)',
      '&:hover': {
        backgroundColor: '#e6ebf1',
        backgroundImage: 'linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%)',
        backgroundPosition: '-0.5em',
        borderColor: 'rgba(27,31,35,.35)',
      },
      '&:active': {
        backgroundColor: '#e9ecef',
        backgroundImage: 'none',
        borderColor: 'rgba(27,31,35,.35)',
        boxShadow: 'inset 0 0.15em 0.3em rgba(27,31,35,.15)',
      },
    },
    containedPrimary: {
      backgroundColor: '#28a745',
      backgroundImage: 'linear-gradient(-180deg,#34d058,#28a745 90%)',
      '&:hover': {
        backgroundColor: '#269f42',
        backgroundImage: 'linear-gradient(-180deg,#2fcb53,#269f42 90%)',
      },
      '&:active': {
        backgroundColor: '#279f43',
        borderColor: 'rgba(27,31,35,.35)',
      },
    },
  },
});

const GithubButton = () => (
  <React.Fragment>
    <Button className={'default'} variant={'contained'}>
      Default
    </Button>
    <Button variant={'contained'} color={'primary'}>
      Primary
    </Button>
  </React.Fragment>
);

GithubButton.getTheme = getTheme;
GithubButton.displayName = 'Button';
GithubButton.metadata = {
  name: 'Github',
  description: 'Classic for developers',
};
GithubButton.codeSandbox = 'https://codesandbox.io/s/vlymn85l0';

export default GithubButton;
