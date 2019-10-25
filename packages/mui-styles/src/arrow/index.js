import { makeStyles } from '@material-ui/styles';
import simple from './simple';
import inverted from './inverted';

const useSimpleArrowStyles = makeStyles(simple);
const useInvertedArrowStyles = makeStyles(inverted);

export { useSimpleArrowStyles, useInvertedArrowStyles };
