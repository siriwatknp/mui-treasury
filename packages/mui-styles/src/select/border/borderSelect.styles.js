import Color from 'color';

const mainColor = '#137cbd';
const lightColor = Color(mainColor)
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
      borderRadius: '50%',
      width: 16,
      height: 16,
    },
    '& input:disabled + *': {
      boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.3) !important',
      background: 'rgba(206,217,224,.5) !important',
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
    },
  },
  checked: {
    '& input + *': {
      boxShadow: `inset 0 0 0 1px ${mainColor}`,
      backgroundColor: '#fff',
      backgroundImage:
        'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
      '&:before': {
        display: 'block',
        width: 16,
        height: 16,
        backgroundImage: `radial-gradient(${mainColor},${mainColor} 28%,rgba(0,0,0,0) 32%)`,
        content: '""',
      },
    },
    '& input:focus + *': {
      backgroundColor: lightColor,
    },
  },
});

