import createInput from './createInput';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles(
  () => ({
    root: {
      width: 48,
      paddingLeft: 2,
      paddingRight: 2,
    },
  }),
  { name: 'YearInput' }
);

export default createInput({
  displayName: 'YearInput',
  useStyles,
  fieldName: 'year',
  updaterName: 'changeYear',
  maxLength: 4,
});
