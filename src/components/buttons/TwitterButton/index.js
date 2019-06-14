/* eslint-disable */
import TwitterButton from './TwitterButton';

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
      '&$focusVisible': {
        boxShadow: shadows[0],
      },
      '&:active': {
        boxShadow: shadows[0],
      },
      '&$disabled': {
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
  
  const TwitterButton = ({ ...props }) => {
    const classes = useStyles();
    return <Button classes={classes} {...props} />;
  };
  
  export default TwitterButton;

`;

TwitterButton.info = {
  name: 'Twitter',
  description: 'Tweet',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/5xj8vn1k1l' },
    { label: 'Full API', url: 'https://material-ui.com/api/button/' },
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
