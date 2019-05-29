import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import MuiToolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(({ breakpoints }) => ({
  small: {
    [breakpoints.up('sm')]: {
      minHeight: 60,
    },
  },
  big: {
    minHeight: 100,
  },
}));

const Toolbar = ({ size, ...props }) => {
  const classes = useStyles();
  return <MuiToolbar className={classes[size]} {...props} />;
};

Toolbar.propTypes = {
  size: PropTypes.oneOf(['', 'small', 'big']),
};
Toolbar.defaultProps = {
  size: '',
};

export default Toolbar;
