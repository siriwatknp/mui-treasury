/* eslint-disable */
import React from 'react';
import GradientButton from 'components/buttons/GradientButton';

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

GradientButton.Demo = () => (
  <>
    <GradientButton>Cool</GradientButton>
    <GradientButton chubby>Chubby</GradientButton>
  </>
);

const gradientCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import Button from '@material-ui/core/Button';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ palette, shadows }) => ({
    root: ({ chubby }) => ({
      minWidth: 200,
      transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
      background:
        /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        'linear-gradient(to right, #FFC371, #FF5F6D)',
      '&:hover': {
        transform: 'scale(1.1)',
      },
      ...(chubby && {
        borderRadius: 50,
      }),
    }),
    label: {
      color: palette.common.white,
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
    },
    contained: {
      minHeight: 30,
      boxShadow: shadows[0],
      '&:active': {
        boxShadow: shadows[0],
      },
    },
  }));
  
  const GradientButton = ({ chubby, ...props }) => {
    const classes = useStyles({ chubby, ...props });
    return <Button {...props} classes={classes} />;
  };
  
  GradientButton.propTypes = {
    chubby: PropTypes.bool,
  };
  GradientButton.defaultProps = {
    chubby: false,
  };
  
  export default GradientButton;

`;

GradientButton.info = {
  name: 'Gradient Button',
  description: 'Welcome to the new trend',
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
      label: 'GradientButton.js',
      code: gradientCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};
GradientButton.codeSandbox = 'https://codesandbox.io/s/3q8xm89p35';

export default GradientButton;
