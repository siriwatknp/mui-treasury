import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, transitions }) => ({
  root: ({ active }) => ({
    backgroundColor: active ? palette.text.primary : palette.text.disabled,
    cursor: 'pointer',
    transition: transitions.create(),
    '&:hover': {
      transform: 'scale(1.2)',
    },
  }),
}));

const SimpleIndicator = ({ className, active, ...props }) => {
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

SimpleIndicator.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};
SimpleIndicator.defaultProps = {
  className: '',
  active: false,
};

export default SimpleIndicator;
