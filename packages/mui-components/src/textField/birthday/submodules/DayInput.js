import { makeStyles } from '@material-ui/core/styles';
import createInput from './createInput';
import { prefixZero } from '../BirthdayContext';

const useStyles = makeStyles(
  () => ({
    root: {
      width: 32,
    },
  }),
  { name: 'DayInput' }
);

export default createInput({
  displayName: 'DayInput',
  useStyles,
  customOnBlur: (e, { zeroPrefixDisabled, updater }) => {
    if (!zeroPrefixDisabled) {
      updater(prefixZero(e.target.value));
    }
  },
  fieldName: 'day',
  updaterName: 'changeDay',
  maxLength: 2,
});
