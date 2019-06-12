import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ breakpoints }) => ({
  root: {
    '& .Indicator-root:not(:first-of-type)': {
      marginLeft: 12,
      [breakpoints.up('sm')]: {
        marginLeft: 16,
      },
      [breakpoints.up('lg')]: {
        marginLeft: 20,
      },
    },
  },
}));

const IndicatorGroup = ({ className, ...props }) => {
  const classes = useStyles();
  return <Box className={cx(className, classes.root)} {...props} />;
};

IndicatorGroup.propTypes = {
  className: PropTypes.string,
};
IndicatorGroup.defaultProps = {
  className: '',
};

export default IndicatorGroup;
