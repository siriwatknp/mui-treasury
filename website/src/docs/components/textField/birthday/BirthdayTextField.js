import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import Birthday from '@mui-treasury/components/textField/birthday';
import { useBootstrapInputStyles } from '@mui-treasury/styles/input/bootstrap';
import { bootstrapLabelStyles } from '@mui-treasury/styles/textField/bootstrap';

const useStyles = makeStyles(() => ({
  label: { marginBottom: 8 },
  day: {
    width: 56,
  },
  month: {
    width: 56,
  },
  year: {
    width: 72,
  },
}));

const useLabelStyles = makeStyles(bootstrapLabelStyles);

const BirthdayTextField = () => {
  const [value, setValue] = React.useState('');
  const styles = useStyles();
  const labelStyles = useLabelStyles();
  const bootstrap = useBootstrapInputStyles();
  return (
    <Box pl={{ xs: 2, sm: 4 }}>
      <Typography color={'textSecondary'}>value : {value}</Typography>
      <FormHelperText>ISO 8601</FormHelperText>
      <br />
      <Birthday label={'Date of birth'} value={value} onChange={setValue}>
        <Birthday.Day
          placeholder={'DD'}
          name={'birthday.day'}
          nextFocus={'birthday.month'}
        />
        <Birthday.Separator />
        <Birthday.Month
          placeholder={'MM'}
          name={'birthday.month'}
          nextFocus={'birthday.year'}
        />
        <Birthday.Separator />
        <Birthday.Year placeholder={'YYYY'} name={'birthday.year'} />
      </Birthday>
      <br />
      <br />
      <Birthday label={'Date of birth'} value={value} onChange={setValue}>
        <Birthday.Day
          component={Input}
          placeholder={'DD'}
          nextFocus={'birthday.month2'}
        />
        <Birthday.Separator />
        <Birthday.Month
          component={Input}
          placeholder={'MM'}
          name={'birthday.month2'}
          nextFocus={'birthday.year2'}
        />
        <Birthday.Separator />
        <Birthday.Year
          component={Input}
          placeholder={'YYYY'}
          name={'birthday.year2'}
        />
      </Birthday>
      <br />
      <br />
      <Birthday
        label={'Date of birth'}
        value={value}
        onChange={setValue}
        display={{ day: '10', month: '02', year: '1994' }}
        InputLabelProps={{ classes: labelStyles, className: styles.label }}
      >
        <Birthday.Day
          error
          classes={bootstrap}
          className={styles.day}
          placeholder={'DD'}
        />
        <Birthday.Month
          error
          classes={bootstrap}
          className={styles.month}
          placeholder={'MM'}
        />
        <Birthday.Year
          error
          classes={bootstrap}
          className={styles.year}
          placeholder={'YYYY'}
        />
        <FormHelperText error>nextFocus is disabled!</FormHelperText>
      </Birthday>
    </Box>
  );
};
// hide-start
BirthdayTextField.metadata = {
  title: 'Birthday',
  path: 'component/textField/birthday',
  description: 'Works well for date form',
  renderedWithoutIframe: true,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Feb 15 2020',
  files: [
    { pkg: 'mui-components', path: 'textField/birthday/BirthdayTextField.js' },
    { pkg: 'mui-components', path: 'textField/birthday/BirthdayContext.js' },
    {
      pkg: 'mui-components',
      path: 'textField/birthday/submodules/createInput.js',
    },
    {
      pkg: 'mui-components',
      path: 'textField/birthday/submodules/DayInput.js',
    },
    {
      pkg: 'mui-components',
      path: 'textField/birthday/submodules/MonthInput.js',
    },
    {
      pkg: 'mui-components',
      path: 'textField/birthday/submodules/YearInput.js',
    },
    {
      pkg: 'mui-components',
      path: 'textField/birthday/submodules/Separator.js',
    },
    {
      pkg: 'mui-components',
      path: 'textField/birthday/BirthdayTextField.test.js',
    },
  ],
};
// hide-end

export default BirthdayTextField;
