/* eslint-disable */
import React from 'react';
import TwitterButton from 'components/buttons/TwitterButton';

const demoCode = `
  import React from 'react';
  import GradientButton from './GradientButton';
  
  const Demo = () => (
    <>
      <GradientButton>Cool</GradientButton>
      <GradientButton chubby>Chubby</GradientButton>
    </>
  )
  
  export default Demo;
`;

TwitterButton.Demo = () => (
  <>
    <TwitterButton color={'primary'} variant={'contained'}>
      Normal
    </TwitterButton>
    <TwitterButton color={'primary'} variant={'contained'} size={'large'}>
      Large Button
    </TwitterButton>
    <TwitterButton variant={'outlined'} color={'primary'}>
      Normal
    </TwitterButton>
    <TwitterButton variant={'outlined'} color={'primary'} size={'large'}>
      Large Button
    </TwitterButton>
  </>
);

const twitterCode = `
  import React from 'react';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ shadows, palette }) => ({
    root: {
      borderRadius: 100,
      minHeight: 30,
      padding: '0 1em',
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
      boxShadow: shadows[0],
      '&:active': {
        boxShadow: shadows[0],
      },
    },
    containedPrimary: {
      backgroundColor: 'rgb(29, 161, 242)',
      color: palette.common.white,
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
      minHeight: 39,
    },
  }));
  
  const TwitterButton = props => {
    const classes = useStyles(props);
    return <Button {...props} classes={classes} />;
  };
  
  export default TwitterButton;

`;

TwitterButton.info = {
  name: 'Twitter Button',
  description: 'Tweet',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/5xj8vn1k1l' },
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
      label: 'TwitterButton.js',
      code: twitterCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};
TwitterButton.codeSandbox = 'https://codesandbox.io/s/5xj8vn1k1l';

export default TwitterButton;
