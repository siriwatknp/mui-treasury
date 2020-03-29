import { blue, blueGrey } from '@material-ui/core/colors';

import styles from '../../inputBase/bordered/borderedInputBase.styles';

export const borderedInputBaseStyles = theme => {
  return {
    ...styles(theme),
    formControl: {
      'label + &': {
        marginTop: 18,
      },
    },
  };
};

export const borderedInputLabelStyles = () => ({
  root: {
    color: blueGrey[400],
    '&$focused:not($error)': {
      color: blue[700],
    },
  },
  error: {},
  focused: {},
  shrink: {
    transform: 'translate(0, 1.5px) scale(0.9)',
    fontWeight: 500,
  },
});
