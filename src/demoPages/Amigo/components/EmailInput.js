import React from 'react';
import { makeStyles } from '@material-ui/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from 'extensions/Button';

const useStyles = makeStyles(({ palette, spacing }) => ({
  root: {
    boxShadow: '0 0 12px 0 rgba(0,0,0,0.12)',
    background: palette.common.white,
    borderRadius: 25,
    paddingLeft: spacing(2),
    fontSize: 14,
    minWidth: 300,
  },
  iconButton: {
    flexShrink: 0,
  },
}));

const EmailInput = () => {
  const classes = useStyles();
  return (
    <InputBase
      placeholder={'example@gmail.com'}
      classes={{
        root: classes.root,
      }}
      endAdornment={
        <Button
          className={classes.iconButton}
          color={'primary'}
          shape={'circular'}
          icon={'fas fa-paper-plane'}
        />
      }
    />
  );
};

EmailInput.propTypes = {};
EmailInput.defaultProps = {};

export default EmailInput;
