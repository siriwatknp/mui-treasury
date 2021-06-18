import makeStyles from '@material-ui/styles/makeStyles';
import borderedInputBaseStyles from './borderedInputBase.styles';

const useBorderedInputBaseStyles = makeStyles(borderedInputBaseStyles, {
  name: 'BorderedInputBase',
});

export { borderedInputBaseStyles, useBorderedInputBaseStyles };

export { default } from './borderedInputBase.styles';
