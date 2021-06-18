import makeStyles from '@material-ui/styles/makeStyles';
import {
  borderedInputBaseStyles,
  borderedInputLabelStyles,
} from './borderedTextField.styles';

const borderedTextFieldStylesHook = {
  useInputBase: makeStyles(borderedInputBaseStyles, {
    name: 'BorderedTextField',
  }),
  useInputLabel: makeStyles(borderedInputLabelStyles, {
    name: 'BorderedTextField',
  }),
};

export {
  borderedInputBaseStyles,
  borderedInputLabelStyles,
  borderedTextFieldStylesHook,
};
