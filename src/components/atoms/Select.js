/* eslint-disable max-len */
import React from 'react';
import styled from '@material-ui/styles/styled';
import MuiSelect from '@material-ui/core/Select';
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
    '&.MuiSelectBase--centered': {
      '& input': {
        textAlign: 'center',
      },
    },
  },
  underline: {
    backgroundColor: 'black',
  },
  error: {
    background: '#ffdbdb',
  },
});

const config = { name: 'TreasurySelect' };

const Select = styled(
  withStyles(styles, config)(props => <MuiSelect {...props} />),
)(allCssSystem, config);

Select.displayName = 'Select';
Select.propTypes = MuiSelect.propTypes;

export default Select;
