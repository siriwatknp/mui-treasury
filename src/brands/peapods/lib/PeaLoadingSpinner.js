import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

const PeaLoadingSpinner = () => {
  const classes = useStyles();
  return <CircularProgress className={classes.progress} />;
};

PeaLoadingSpinner.propTypes = {};
PeaLoadingSpinner.defaultProps = {};
PeaLoadingSpinner.metadata = {
  name: 'Pea Loading Spinner',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};
PeaLoadingSpinner.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaLoadingSpinner;
