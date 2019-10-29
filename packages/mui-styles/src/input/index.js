import { makeStyles } from '@material-ui/styles';
import chrome from './chrome';
import bootstrap from './bootstrap';
import search from './search';

const useChromeInputStyles = makeStyles(chrome);
const useBootstrapInputStyles = makeStyles(bootstrap);
const useSearchInputStyles = makeStyles(search);

export { useChromeInputStyles, useBootstrapInputStyles, useSearchInputStyles };
