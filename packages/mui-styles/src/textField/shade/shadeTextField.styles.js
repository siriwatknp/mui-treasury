import styles from '../../inputBase/shade/shadeInputBase.styles';

export const shadeInputBaseStyles = theme => {
  return {
    ...styles(theme),
    formControl: {
      'label + &': {
        marginTop: 24,
      },
    },
  };
};

export const shadeInputLabelStyles = ({ palette }) => ({
  root: {
    color: palette.text.primary,
    '&$focused:not($error)': {
      color: palette.text.primary,
    },
  },
  error: {},
  focused: {},
  shrink: {
    transform: 'translate(0, 1.5px) scale(0.8)',
    letterSpacing: 1,
  },
});
