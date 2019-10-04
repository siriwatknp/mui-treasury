import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ transitions, breakpoints }) => {
  const SIZES = {
    xs: 8,
    sm: 10,
    lg: 12,
  };
  return {
    root: ({ active }) => ({
      display: 'inline-block',
      padding: SIZES.xs,
      lineHeight: 0,
      cursor: 'pointer',
      [breakpoints.up('sm')]: {
        padding: SIZES.sm,
      },
      [breakpoints.up('lg')]: {
        padding: SIZES.lg,
      },
      '& + .Indicator-root': {
        marginLeft: SIZES.xs,
        [breakpoints.up('sm')]: {
          marginLeft: SIZES.sm,
        },
        [breakpoints.up('sm')]: {
          marginLeft: SIZES.lg,
        },
      },
      '&:hover': {
        '&:after': {
          transform: 'scale(1.2)',
        },
      },
      '&:after': {
        content: '""',
        display: 'inline-block',
        width: SIZES.xs,
        height: SIZES.xs,
        borderRadius: '50%',
        backgroundColor: 'white',
        opacity: active ? 1 : 0.4,
        transition: transitions.create(),
        [breakpoints.up('sm')]: {
          width: SIZES.sm,
          height: SIZES.sm,
        },
        [breakpoints.up('lg')]: {
          width: SIZES.lg,
          height: SIZES.lg,
        },
      },
    }),
  };
});

const DotIndicator = ({ className, active, ...props }) => {
  const classes = useStyles({ active, ...props });
  return (
    <div
      className={cx(
        className,
        'Indicator-root',
        'DotIndicator-root',
        active && '-active',
        classes.root,
      )}
      {...props}
    />
  );
};

DotIndicator.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
};
DotIndicator.defaultProps = {
  className: '',
  active: false,
};

export default DotIndicator;
