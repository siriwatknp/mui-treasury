import { makeStyles } from '@material-ui/styles';
import wide from './wide';
import cover from './cover';
import slope from './slope';
import square from './square';

const useWideCardMediaStyles = makeStyles(wide);
const useCoverCardMediaStyles = makeStyles(cover);
const useSlopeCardMediaStyles = makeStyles(slope);
const useSquareCardMediaStyles = makeStyles(square);

export {
  useWideCardMediaStyles,
  useCoverCardMediaStyles,
  useSlopeCardMediaStyles,
  useSquareCardMediaStyles,
};
