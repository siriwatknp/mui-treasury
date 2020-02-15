import createInput from './createInput';
import { makeStyles } from '@material-ui/core/styles';
import { prefixZero } from '../BirthdayContext';

const useStyles = makeStyles(
  () => ({
    root: {
      width: 44,
    },
  }),
  { name: 'YearInput' }
);

export default createInput({
  displayName: 'YearInput',
  useStyles,
  customOnBlur: (e, { zeroPrefixDisabled, updater }) => {
    if (!zeroPrefixDisabled) {
      updater(prefixZero(e.target.value));
    }
  },
  fieldName: 'year',
  updaterName: 'changeYear',
  maxLength: 4,
})
