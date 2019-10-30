import { makeStyles } from '@material-ui/styles';

import {
  bootstrapLabelStyles,
  bootstrapInputStyles,
  bootstrapHelperTextStyles,
} from './bootstrap';

const bootstrapTextFieldHook = {
  useLabel: makeStyles(bootstrapLabelStyles),
  useInput: makeStyles(bootstrapInputStyles),
  useHelperText: makeStyles(bootstrapHelperTextStyles),
};

export { bootstrapTextFieldHook };
