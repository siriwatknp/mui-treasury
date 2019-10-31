import { makeStyles } from '@material-ui/styles';

import {
  bootstrapLabelStyles,
  bootstrapInputStyles,
  bootstrapHelperTextStyles,
} from './bootstrap';
import { filledInputStyles, filledHelperTextStyles } from './filled';

const bootstrapTextFieldHook = {
  useLabel: makeStyles(bootstrapLabelStyles),
  useInput: makeStyles(bootstrapInputStyles),
  useHelperText: makeStyles(bootstrapHelperTextStyles),
};
const filledTextFieldHook = {
  useInput: makeStyles(filledInputStyles),
  useHelperText: makeStyles(filledHelperTextStyles),
};

export { bootstrapTextFieldHook, filledTextFieldHook };
