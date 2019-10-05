import { makeStyles } from '@material-ui/styles';
import wide from './wide';
import cover from './cover';

const useWideCardMediaStyles = makeStyles(wide);
const useCoverCardMediaStyles = makeStyles(cover);

export { useWideCardMediaStyles, useCoverCardMediaStyles };
