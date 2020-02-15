import React, { useState, useReducer, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

const BirthdayContext = React.createContext();

const TYPES = {
  CHANGE_DAY: 'CHANGE_DAY',
  CHANGE_MONTH: 'CHANGE_MONTH',
  CHANGE_YEAR: 'CHANGE_YEAR',
  RESET: 'RESET',
  CLEAR: 'CLEAR',
};

const defaultToValue = ({ day, month, year } = {}) => {
  if (!day && !month && !year) return '';
  if (day && !month && !year) return day;
  if (!day && month && !year) return month;
  if (!day && !month && year) return year;
  if (day && month && !year) return `--${month}-${day}`;
  return `${year}-${month}-${day}`;
};

export const prefixZero = (val = '') => (val.length === 1 ? `0${val}` : val);

export const useBirthday = () => {
  const ctx = React.useContext(BirthdayContext);
  if (!ctx) {
    throw new Error('useBirthday must be used under BirthdayProvider');
  }
  return ctx;
};

export const useNextFocus = (isValid, nextInputName) => {
  const [focused, setFocused] = useState(false);
  useEffect(() => {
    if (isValid && focused) {
      const input = document.querySelector(`input[name="${nextInputName}"]`);
      if (input) {
        input.focus();
        input.select();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid]);
  return setFocused;
};

export const BirthdayConsumer = BirthdayContext.Consumer;

export const BirthdayProvider = ({
  display,
  value = '',
  toValue = defaultToValue,
  onChange,
  ...props
}) => {
  const initialState = {
    day: display?.day ?? '',
    month: display?.month ?? '',
    year: display?.year ?? '',
    value,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case TYPES.CHANGE_DAY:
        return {
          ...state,
          day: action.value,
          value: toValue({ ...state, day: action.value }),
        };
      case TYPES.CHANGE_MONTH:
        return {
          ...state,
          month: action.value,
          value: toValue({ ...state, month: action.value }),
        };
      case TYPES.CHANGE_YEAR:
        return {
          ...state,
          year: action.value,
          value: toValue({ ...state, year: action.value }),
        };
      case TYPES.RESET:
        return initialState;
      case TYPES.CLEAR:
        return { day: '', month: '', year: '', value: '' };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const changeDay = useCallback(value => {
    if (state.day !== value) dispatch({ type: TYPES.CHANGE_DAY, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeMonth = useCallback(value => {
    if (state.month !== value) dispatch({ type: TYPES.CHANGE_MONTH, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeYear = useCallback(value => {
    if (state.year !== value) dispatch({ type: TYPES.CHANGE_YEAR, value });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const reset = useCallback(() => dispatch({ type: TYPES.RESET }), []);
  const clear = useCallback(() => dispatch({ type: TYPES.CLEAR }), []);
  useEffect(() => {
    if (onChange) {
      console.log('run');
      onChange(state.value, state);
    }
  }, [state, onChange]);
  return (
    <BirthdayContext.Provider
      value={{
        ...state,
        TYPES,
        dispatch,
        changeDay,
        changeMonth,
        changeYear,
        reset,
        clear,
      }}
      {...props}
    />
  );
};

BirthdayProvider.propTypes = {
  display: PropTypes.shape({
    day: PropTypes.string,
    month: PropTypes.string,
    year: PropTypes.string,
  }),
  onChange: PropTypes.func,
  value: PropTypes.string,
  toValue: PropTypes.func,
};
BirthdayProvider.defaultProps = {
  onChange: undefined,
  display: undefined,
  value: undefined,
  toValue: undefined,
};
