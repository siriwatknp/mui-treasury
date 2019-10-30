export { default as bootstrapInputStyles } from '../../input/bootstrap';

const fontFamily = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(',');
const helperTextColor = '#6c757d';
const validColor = '#28a745';
const errorColor = '#dc3545';
const helperTextFontSize = 12.8;

export const bootstrapLabelStyles = ({ palette, spacing }) => {
  const space = spacing(1); // default = 8;
  const labelColor = palette.text.primary;
  return {
    root: {
      position: 'initial',
      textAlign: 'left',
      transform: 'none',
      fontSize: 16,
      color: labelColor,
      fontFamily,
      '&& + *': {
        // override initial styles
        // label + .MuiInput-formControl
        marginTop: space,
      },
    },
    focused: {
      '&$root': {
        color: palette.text.primary,
      },
    },
  };
};

export const bootstrapHelperTextStyles = ({ spacing }) => {
  const space = spacing(1); // default = 8;
  return {
    root: {
      fontFamily,
      color: helperTextColor,
      lineHeight: '19.2px',
      marginTop: space / 2,
      fontSize: helperTextFontSize,
      '&.-valid': {
        color: validColor,
      },
      '&.-error': {
        color: errorColor,
      },
    },
  };
};
