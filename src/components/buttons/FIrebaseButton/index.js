import FirebaseButton from './FirebaseButton';

const demoCode = `
  import React from 'react';
  import FirebaseButton from './FirebaseButton';
  
  const Demo = () => (
    <>
      <FirebaseButton>Default</FirebaseButton>
      <FirebaseButton variant={'contained'} color={'primary'}>
        Primary
      </FirebaseButton>
    </>
  )
  
  export default Demo;
`;

const firebaseCode = `
  import React from 'react';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ shadows, palette }) => ({
    root: {
      borderRadius: 8,
    },
    text: {
      paddingLeft: 16,
      paddingRight: 16,
    },
    contained: {
      boxShadow: 'none',
      '&$focusVisible': {
        boxShadow: shadows[0],
      },
      '&:active': {
        boxShadow: shadows[0],
      },
    },
    containedPrimary: {
      backgroundColor: '#039be5',
      color: palette.common.white,
      '&:hover': {
        backgroundColor: '#0388ca',
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: '#0388ca',
        },
      },
    },
    label: {
      textTransform: 'none',
      letterSpacing: '0.5px',
      fontWeight: 500,
    },
  }));
  
  const FirebaseButton = ({ ...props }) => {
    const classes = useStyles();
    return <Button classes={classes} {...props} />;
  };
  
  export default FirebaseButton;

`;

FirebaseButton.info = {
  name: 'Firebase',
  description: "We're on fire",
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/ojnxlj1ry6' },
    { label: 'Full API', url: 'https://material-ui.com/api/button/' },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'FirebaseButton.js',
      code: firebaseCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};
FirebaseButton.codeSandbox = 'https://codesandbox.io/s/ojnxlj1ry6';

export default FirebaseButton;
