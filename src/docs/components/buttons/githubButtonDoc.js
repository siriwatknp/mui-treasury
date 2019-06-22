import React from 'react';
import GithubButton from 'components/buttons/GithubButton';

const demoCode = `
  import React from 'react';
  import GithubButton from './GithubButton';
  
  const Demo = () => (
    <>
      <GithubButton variant={'contained'}>
        Default
      </GithubButton>
      <GithubButton variant={'contained'} color={'primary'}>
        Primary
      </GithubButton>
    </>
  )
  
  export default Demo;
`;

GithubButton.Demo = () => (
  <>
    <GithubButton variant={'contained'}>Default</GithubButton>
    <GithubButton variant={'contained'} color={'primary'}>
      Primary
    </GithubButton>
  </>
);

const githubCode = `
  import React from 'react';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ spacing, palette }) => ({
    root: {
      lineHeight: '20px',
      padding: '6px 12px',
      minHeight: 'auto',
      color: '#24292e',
      '& svg': {
        fontSize: 16,
        marginLeft: -2,
        marginRight: spacing(0.5),
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
      color: palette.common.white,
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
  }));
  
  const GithubButton = props => {
    const classes = useStyles(props);
    return <Button {...props} classes={classes} />;
  };
  
  GithubButton.codeSandbox = 'https://codesandbox.io/s/vlymn85l0';
  
  export default GithubButton;

`;

GithubButton.info = {
  name: 'Github Button',
  description: 'Classic for developers',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/3q8xm89p35' },
    { label: 'Button API', url: 'https://material-ui.com/api/button/' },
    {
      label: 'Styling',
      url: 'https://material-ui.com/styles/basics/#hook-api',
    },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'GithubButton.js',
      code: githubCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};
GithubButton.codeSandbox = 'https://codesandbox.io/s/3q8xm89p35';

export default GithubButton;
