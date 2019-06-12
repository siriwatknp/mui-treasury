import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, transitions }) => ({
  root: ({ active }) => ({
    backgroundColor: active ? palette.common.white : 'rgba(255,255,255,0.38)',
    cursor: 'pointer',
    transition: transitions.create(),
    '&:hover': {
      transform: 'scale(1.2)',
    },
  }),
}));

const InvertedIndicator = ({ className, active, ...props }) => {
  const classes = useStyles({ active });
  return (
    <Box
      className={cx(
        className,
        'Indicator-root',
        '-inverted',
        active && '-active',
        classes.root,
      )}
      display={'inline-block'}
      width={{ xs: 8, sm: 10, lg: 12 }}
      height={{ xs: 8, sm: 10, lg: 12 }}
      borderRadius={'50%'}
      {...props}
    />
  );
};

InvertedIndicator.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};
InvertedIndicator.defaultProps = {
  className: '',
  active: false,
};

export default InvertedIndicator;
