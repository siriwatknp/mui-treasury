import { makeStyles } from '@material-ui/styles';

import gatsby from './gatsby';
import jupiter from './jupiter';

const useGatsbyNestedMenuStyles = makeStyles(gatsby);
const useJupiterNestedMenuStyles = makeStyles(jupiter);

export { useGatsbyNestedMenuStyles, useJupiterNestedMenuStyles };
