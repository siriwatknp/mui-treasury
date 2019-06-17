import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ shadows, palette }) => ({
  root: {
    borderRadius: 8,
  },
  text: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  contained: {
    boxShadow: 'none',
    '&$focusVisible': {
      boxShadow: shadows[0],
    },
    '&:active': {
      boxShadow: shadows[0],
    },
  },
  containedPrimary: {
    backgroundColor: '#039be5',
    color: palette.common.white,
    '&:hover': {
      backgroundColor: '#0388ca',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: '#0388ca',
      },
    },
  },
  label: {
    textTransform: 'none',
    letterSpacing: '0.5px',
    fontWeight: 500,
  },
}));

const FirebaseButton = ({ ...props }) => {
  const classes = useStyles();
  return <Button classes={classes} {...props} />;
};

export default FirebaseButton;
