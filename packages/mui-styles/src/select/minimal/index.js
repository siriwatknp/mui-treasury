import makeStyles from '@material-ui/styles/makeStyles';
import minimalSelectStyles from './minimalSelect.styles';

const useMinimalSelectStyles = makeStyles(minimalSelectStyles, {
  name: 'MinimalSelect',
});

export { minimalSelectStyles, useMinimalSelectStyles };

export { default } from './minimalSelect.styles';
