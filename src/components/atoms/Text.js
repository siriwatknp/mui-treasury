import Typography from '@material-ui/core/Typography';
import styled from '@material-ui/styles/styled';
import cssSystem, { lineHeight, letterSpacing } from 'helpers/cssSystem';
import {
  compose,
  typography,
  spacing,
  display,
  palette,
  positions,
  sizing,
} from '@material-ui/system';

export const styleFunction = compose(
  display,
  sizing,
  spacing,
  typography,
  palette,
  positions,
  lineHeight,
  letterSpacing,
  cssSystem,
);

const Text = styled(Typography)(styleFunction);

Text.brand = {
  color: 'primary.main',
  fontSize: 28,
  fontFamily: 'Covered By Your Grace',
};
Text.displayName = 'Text';

export default Text;
