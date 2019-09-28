import { makeStyles } from '@material-ui/styles';

import multiRowBorderedGrid from './multiRowBorderedGrid';
import singleRowBorderedGrid from './singleRowBorderedGrid';

const useMultiRowBorderedGridStyles = makeStyles(multiRowBorderedGrid);
const useSingleRowBorderedGridStyles = makeStyles(singleRowBorderedGrid);

export {
  singleRowBorderedGrid,
  useSingleRowBorderedGridStyles,
  multiRowBorderedGrid,
  useMultiRowBorderedGridStyles,
};
