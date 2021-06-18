import makeStyles from '@material-ui/styles/makeStyles';
import roundInputBaseStyles from './roundInputBase.styles';

const useRoundInputBaseStyles = makeStyles(roundInputBaseStyles, {
  name: 'RoundInputBase',
});

export { roundInputBaseStyles, useRoundInputBaseStyles };

export { default } from './roundInputBase.styles';
