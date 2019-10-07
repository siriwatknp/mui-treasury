import { makeStyles } from '@material-ui/styles';
import wide from './wide';
import cover from './cover';
import slope from './slope';

const useWideCardMediaStyles = makeStyles(wide);
const useCoverCardMediaStyles = makeStyles(cover);
const useSlopeCardMediaStyles = makeStyles(slope);

export {
  useWideCardMediaStyles,
  useCoverCardMediaStyles,
  useSlopeCardMediaStyles,
};
