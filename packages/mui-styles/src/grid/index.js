import { makeStyles } from '@material-ui/styles';

import fullBordered from './fullBordered';
import halfBordered from './halfBordered';
import gutterBordered from './gutterBordered';

const useFullBorderedGridStyles = makeStyles(fullBordered);
const useHalfBorderedGridStyles = makeStyles(halfBordered);
const useGutterBorderedGridStyles = makeStyles(gutterBordered);

export {
  useFullBorderedGridStyles,
  useHalfBorderedGridStyles,
  useGutterBorderedGridStyles,
};
