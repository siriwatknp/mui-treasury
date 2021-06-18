import makeStyles from '@material-ui/styles/makeStyles';
import neonCheckboxStyles from './neonCheckbox.styles';

const useNeonCheckboxStyles = makeStyles(neonCheckboxStyles, {
  name: 'NeonCheckbox',
});

export { neonCheckboxStyles, useNeonCheckboxStyles };

export { default } from './neonCheckbox.styles';
