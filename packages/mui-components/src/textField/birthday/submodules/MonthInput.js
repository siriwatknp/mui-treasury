import createInput from './createInput';
import { makeStyles } from '@material-ui/core/styles';
import { prefixZero } from '../BirthdayContext';

const useStyles = makeStyles(
  () => ({
    root: {
      width: 32,
    },
  }),
  { name: 'MonthInput' }
);

export default createInput({
  displayName: 'MonthInput',
  useStyles,
  customOnBlur: (e, { zeroPrefixDisabled, updater }) => {
    if (!zeroPrefixDisabled) {
      updater(prefixZero(e.target.value));
    }
  },
  fieldName: 'month',
  updaterName: 'changeMonth',
  maxLength: 2,
})
