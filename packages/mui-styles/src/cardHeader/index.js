import { makeStyles } from '@material-ui/styles';
import containedCardHeaderStyles from './contained';
import brandCardHeaderStyles from './brand';

const useContainedCardHeaderStyles = makeStyles(containedCardHeaderStyles);
const useBrandCardHeaderStyles = makeStyles(brandCardHeaderStyles);

export {
  containedCardHeaderStyles,
  useContainedCardHeaderStyles,
  brandCardHeaderStyles,
  useBrandCardHeaderStyles,
};
