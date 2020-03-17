import { blueGrey } from '@material-ui/core/colors';

export default () => {
  return {
    root: {
      padding: 7,
    },
    thumb: {
      width: 24,
      height: 24,
      backgroundColor: '#fff',
      boxShadow:
        '0 0 12px 0 rgba(0,0,0,0.08), 0 0 8px 0 rgba(0,0,0,0.12), 0 0 4px 0 rgba(0,0,0,0.38)',
    },
    switchBase: {
      color: 'rgba(0,0,0,0.38)',
      padding: 7,
    },
    track: {
      borderRadius: 20,
      backgroundColor: blueGrey[300],
    },
    checked: {
      '& $thumb': {
        backgroundColor: '#fff',
      },
      '& + $track': {
        opacity: '1 !important',
      },
    },
    focusVisible: {},
  };
};
