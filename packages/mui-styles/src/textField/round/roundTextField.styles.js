import styles from '../../inputBase/round/roundInputBase.styles';

export const roundInputBaseStyles = theme => {
  return {
    ...styles(theme),
    formControl: {
      'label + &': {
        marginTop: 24,
      },
    },
  };
};

export const roundInputLabelStyles = ({ palette }) => ({
  root: {
    color: palette.grey[700],
    marginLeft: '0.75rem',
  },
  error: {},
  focused: {
  },
  shrink: {
    transform: 'translate(0, 1.5px) scale(1)',
  },
});

export const roundHelperTextStyles = () => ({
  root: {
    marginLeft: '0.75rem',
  },
});
