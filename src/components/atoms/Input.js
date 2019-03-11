/* eslint-disable max-len */
import React from 'react';
import styled from '@material-ui/styles/styled';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import { allCssSystem } from 'helpers/cssSystem';

const styles = theme => ({
  root: {
    padding: '2px 8px',
    color: theme.palette.text.secondary,
    background: '#f5f5f5',
    borderRadius: theme.shape.borderRadius,
    '& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&.MuiInputBase--centered': {
      '& input': {
        textAlign: 'center',
      },
    },
  },
  error: {
    background: '#ffdbdb',
  },
});

const config = { name: 'TreasuryInput' };

const Input = styled(
  withStyles(styles, config)(props => <InputBase {...props} />),
)(allCssSystem, config);

Input.displayName = 'Input';
Input.propTypes = InputBase.propTypes;

export default Input;
