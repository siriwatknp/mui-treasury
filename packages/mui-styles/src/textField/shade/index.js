import makeStyles from '@material-ui/styles/makeStyles';
import {
  shadeInputBaseStyles,
  shadeInputLabelStyles,
} from './shadeTextField.styles';

const shadeTextFieldStylesHook = {
  useInputBase: makeStyles(shadeInputBaseStyles, {
    name: 'ShadeTextField',
  }),
  useInputLabel: makeStyles(shadeInputLabelStyles, {
    name: 'ShadeTextField',
  }),
};

export {
  shadeInputBaseStyles,
  shadeInputLabelStyles,
  shadeTextFieldStylesHook,
};
