import Color from 'color';

const mainColor = '#137cbd';
const lightColor = Color(mainColor)
  .fade(0.8)
  .toString();

const errorColor = '#d52731';
const lightErrorColor = Color(errorColor)
  .fade(0.8)
  .toString();

export default () => ({
  root: {
    '& + *': {
      marginTop: '2px',
      fontSize: '0.875rem',
    },
    '&:hover, &.Mui-focusVisible': {
      backgroundColor: 'transparent !important',
    },
    '& input + *': {
      borderRadius: 3,
      width: 16,
      height: 16,
    },
    '& input:disabled + *': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
    '&:not($checked)': {
      '& input + *': {
        boxShadow:
          '0 1px 3px 0 rgba(0,0,0,0.12), inset 0 0 0 1px rgba(16,22,26,.5)',
        backgroundColor: '#fff',
      },
      '& input:hover ~ *, & input:focus + *': {
        boxShadow: `inset 0 0 0 1px ${mainColor}, inset 0 -1px 0 ${mainColor}`,
        backgroundColor: lightColor,
      },
      '& input + .Mui-error': {
        boxShadow: `inset 0 0 0 1px ${errorColor}`,
        background: lightErrorColor,
      },
      '& input:hover + .Mui-error, input:focus + .Mui-error': {
        boxShadow: `0 0 0 4px ${lightErrorColor}, inset 0 0 0 1px ${errorColor}`,
      },
    },
  },
  checked: {
    '& input + *': {
      backgroundColor: `${mainColor} !important`,
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""',
      },
    },
    '& input:focus + *': {
      boxShadow: `0 0 0 4px ${lightColor}`,
    },
  },
});
