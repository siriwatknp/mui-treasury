import { makeStyles } from '@material-ui/styles';

import fullBordered from './fullBordered';
import halfBordered from './halfBordered';

const useFullBorderedGridStyles = makeStyles(fullBordered);
const useHalfBorderedGridStyles = makeStyles(halfBordered);

export { useFullBorderedGridStyles, useHalfBorderedGridStyles };
