import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, transitions, breakpoints }) => ({
  root: ({ active }) => ({
    display: 'inline-block',
    borderRadius: '50%',
    width: 8,
    height: 8,
    [breakpoints.up('sm')]: {
      width: 10,
      height: 10,
    },
    [breakpoints.up('lg')]: {
      width: 12,
      height: 12,
    },
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
    <div
      className={cx(
        className,
        'Indicator-root',
        '-inverted',
        active && '-active',
        classes.root,
      )}
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
SimpleIndicator.code = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import cx from 'clsx';
  import { makeStyles } from '@material-ui/styles';
  
  const useStyles = makeStyles(({ palette, transitions, breakpoints }) => ({
    root: ({ active }) => ({
      display: 'inline-block',
      borderRadius: '50%',
      width: 8,
      height: 8,
      [breakpoints.up('sm')]: {
        width: 10,
        height: 10,
      },
      [breakpoints.up('lg')]: {
        width: 12,
        height: 12,
      },
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
      <div
        className={cx(
          className,
          'Indicator-root',
          '-inverted',
          active && '-active',
          classes.root,
        )}
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

`;

export default SimpleIndicator;
