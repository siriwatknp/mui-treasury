import { yellow } from '@material-ui/core/colors';

export default ({ palette }) => {
  const color = yellow[700];
  const error = '#ff6b81';
  return {
    root: {
      backgroundColor: palette.grey[200],
      transition: '0.3s',
    },
    focused: {
      backgroundColor: palette.common.white,
      boxShadow: `0 0 0 2px ${color}`,
    },
    error: {
      backgroundColor: '#fff0f0',
      '&$focused': {
        boxShadow: `0 0 0 2px ${error}`,
      },
    },
    disabled: {
      backgroundColor: palette.grey[50],
    },
    input: {
      padding: '1rem',
    },
  };
};
