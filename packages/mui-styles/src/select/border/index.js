import makeStyles from '@material-ui/styles/makeStyles';
import borderSelectStyles from './borderSelect.styles';

const useBorderSelectStyles = makeStyles(borderSelectStyles, {
  name: 'BorderSelect',
});

export { borderSelectStyles, useBorderSelectStyles };

export { default } from './borderSelect.styles';
