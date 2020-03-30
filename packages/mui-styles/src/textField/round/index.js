import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  roundInputBaseStyles,
  roundInputLabelStyles,
  roundHelperTextStyles,
} from './roundTextField.styles';

const roundTextFieldStylesHook = {
  useInputBase: makeStyles(roundInputBaseStyles, {
    name: 'RoundTextField',
  }),
  useInputLabel: makeStyles(roundInputLabelStyles, {
    name: 'RoundTextField',
  }),
  useHelperText: makeStyles(roundHelperTextStyles, {
    name: 'RoundTextField',
  }),
};

export {
  roundInputBaseStyles,
  roundInputLabelStyles,
  roundTextFieldStylesHook,
};
