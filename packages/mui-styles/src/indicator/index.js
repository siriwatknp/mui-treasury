import { makeStyles } from '@material-ui/styles';

import dot from './dot';
import inverted from './inverted';

const useDotIndicatorStyles = makeStyles(dot);
const useInvertedIndicatorStyles = makeStyles(inverted);

export { useDotIndicatorStyles, useInvertedIndicatorStyles };
