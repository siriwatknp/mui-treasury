import React from 'react';
import { storiesOf } from '@storybook/react';
import makeStyles from '@material-ui/styles/makeStyles';
import Birthday from './BirthdayTextField';
import { useBootstrapInputStyles } from '@mui-treasury/styles/input/bootstrap';

const StylesProvider = ({ children, hooks }) => {
  return <>{children(hooks.map(hook => hook()))}</>;
};

const useStyles = makeStyles(() => ({
  label: { marginBottom: 4 },
  day: {
    width: 48,
  },
  month: {
    width: 56,
  },
  year: {
    width: 72,
  },
  separator: {
    padding: '0 4px',
  },
}));

storiesOf('mui-components|TextField', module)
  .add('birthday', () => (
    <div>
      <Birthday id={'dob'} label={'Date of birth'}>
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
      <StylesProvider hooks={[useBootstrapInputStyles, useStyles]}>
        {([bootstrap, styles]) => (
          <Birthday
            id={'dob2'}
            label={'Date of birth'}
            InputLabelProps={{ className: styles.label }}
          >
            <Birthday.Day
              classes={bootstrap}
              className={styles.day}
              placeholder={'DD'}
              name={'birthday.day2'}
              nextFocus={'birthday.month2'}
            />
            <Birthday.Separator className={styles.separator} />
            <Birthday.Month
              classes={bootstrap}
              className={styles.month}
              placeholder={'MM'}
              name={'birthday.month2'}
              nextFocus={'birthday.year2'}
            />
            <Birthday.Separator className={styles.separator} />
            <Birthday.Year
              classes={bootstrap}
              className={styles.year}
              placeholder={'YYYY'}
              name={'birthday.year2'}
            />
          </Birthday>
        )}
      </StylesProvider>
    </div>
  ))
  .add('birthday (RTL)', () => (
    <Birthday id={'dob'} label={'Date of birth'}>
      <Birthday.Year
        placeholder={'YYYY'}
        name={'birthday.year'}
        nextFocus={'birthday.month'}
      />
      <Birthday.Separator />
      <Birthday.Month
        placeholder={'MM'}
        name={'birthday.month'}
        nextFocus={'birthday.day'}
      />
      <Birthday.Separator />
      <Birthday.Day placeholder={'DD'} name={'birthday.day'} />
    </Birthday>
  ));
