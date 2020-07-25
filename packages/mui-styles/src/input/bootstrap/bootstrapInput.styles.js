import Color from 'color';

export default ({ palette, transitions }) => {
  const { white } = palette.common;
  const inputRadius = 4;
  const borderWidth = 1;
  const inputPadding = '.375rem .75rem';
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
  const borderColor = '#ced4da';
  // you can change normal color to primary using
  // palette.primary.main
  const normalColor = '#80bdff';
  const validColor = '#28a745';
  const errorColor = '#dc3545';
  return {
    root: {
      '&.-valid $input': {
        borderColor: `${validColor} !important`,
        '&:focus': {
          boxShadow: `0 0 0 0.2rem ${Color(validColor).fade(0.75)}`,
        },
      },
    },
    error: {
      '& $input': {
        borderColor: `${errorColor} !important`,
        '&:focus': {
          boxShadow: `0 0 0 0.2rem ${Color(errorColor).fade(0.75)}`,
        },
      },
    },
    input: {
      boxSizing: 'border-box',
      borderRadius: inputRadius,
      position: 'relative',
      backgroundColor: white,
      borderWidth,
      borderStyle: 'solid',
      borderColor,
      fontSize: 16,
      height: 'calc(1.5em + .75rem + 2px)',
      width: 'auto',
      padding: inputPadding,
      lineHeight: 1.5,
      transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
      // Use the system font instead of the default Roboto font.
      fontFamily,
      '&:focus': {
        outline: 'none',
        borderRadius: inputRadius,
        borderColor: normalColor,
        boxShadow: `0 0 0 0.2rem ${Color(normalColor).fade(
          palette.type === 'dark' ? 0.48 : 0.75
        )}`,
      },
    },
  };
};
