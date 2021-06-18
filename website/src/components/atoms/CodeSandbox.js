import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    height: 360,
    width: '100%',
    border: 0,
    borderRadius: 4,
    overflow: 'hidden',
    [breakpoints.up('sm')]: {
      height: 500,
    },
    [breakpoints.up('md')]: {
      marginLeft: 'calc(-36vw + 440px)',
      width: '72vw',
    },
  },
}));

const CodeSandbox = props => {
  const classes = useStyles();
  return (
    <iframe
      title={'CodeSandbox'}
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      {...props}
      className={classes.root}
    />
  );
};

export default CodeSandbox;
