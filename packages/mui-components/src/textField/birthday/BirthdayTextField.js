import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import { BirthdayProvider, BirthdayConsumer } from './BirthdayContext';
import DayInput from './submodules/DayInput';
import MonthInput from './submodules/MonthInput';
import YearInput from './submodules/YearInput';
import Separator from './submodules/Separator';

const useStyles = makeStyles(
  () => ({
    input: {
      display: 'none',
    },
  }),
  { name: 'BirthdayTextField' }
);

const BirthdayTextField = ({
  id,
  label,
  children,
  InputLabelProps,
  ...props
}) => {
  const styles = useStyles(props);
  return (
    <BirthdayProvider {...props}>
      <InputLabel htmlFor={id} shrink {...InputLabelProps}>
        {label}
      </InputLabel>
      <BirthdayConsumer>
        {({ value }) => (
          <InputBase
            className={styles.input}
            id={id}
            label={label}
            value={value}
          />
        )}
      </BirthdayConsumer>
      {children}
    </BirthdayProvider>
  );
};

BirthdayTextField.propTypes = {
  id: PropTypes.string,
  label: PropTypes.node,
  children: PropTypes.node,
  InputLabelProps: PropTypes.shape({}),
  display: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  value: PropTypes.string,
  toValue: PropTypes.func,
};
BirthdayTextField.defaultProps = {
  id: undefined,
  label: undefined,
  children: null,
  InputLabelProps: undefined,
  display: undefined,
  value: undefined,
  toValue: undefined,
};
BirthdayTextField.Day = DayInput;
BirthdayTextField.Month = MonthInput;
BirthdayTextField.Year = YearInput;
BirthdayTextField.Separator = Separator;

export default BirthdayTextField;
