import React from 'react';
import Typography from '@material-ui/core/Typography';
import styled from '@material-ui/styles/styled';
import positions from '@material-ui/system/positions';
import cssSystem from 'helpers/cssSystem';
import {
  compose,
  typography,
  spacing,
  display,
  palette,
} from '@material-ui/system';

export const styleFunction = compose(
  display,
  spacing,
  typography,
  palette,
  positions,
  cssSystem,
);

const Text = styled(props => <Typography {...props} />)(styleFunction);

Text.brand = {
  color: 'primary.main',
  fontSize: 28,
  fontFamily: 'Covered By Your Grace',
};
Text.displayName = 'Text';

export default Text;
