/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ palette, shadows }) => ({
  root: ({ chubby }) => ({
    minWidth: 200,
    transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
    background:
      'linear-gradient(to right, #FFC371, #FF5F6D)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
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
    '&$focusVisible': {
      boxShadow: shadows[0],
    },
    '&:active': {
      boxShadow: shadows[0],
    },
    '&$disabled': {
      boxShadow: shadows[0],
    },
  },
}));

const GradientButton = ({ chubby, ...props }) => {
  const classes = useStyles({ chubby });
  return <Button classes={classes} {...props} />;
};

GradientButton.propTypes = {
  chubby: PropTypes.bool,
};
GradientButton.defaultProps = {
  chubby: false,
};

export default GradientButton;
