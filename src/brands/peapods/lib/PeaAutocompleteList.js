/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import Select, {
  AsyncCreatable,
  Creatable,
  Async as AsyncSelect,
} from 'react-select-v2';
import cx from 'clsx';
import { uniqBy } from 'lodash';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

import PeaTag from './PeaTag';
import PeaSearchInputControl from './PeaSearchInputControl';

const useStyles = makeStyles(theme => ({
  root: {
    width: 360,
    padding: props => (props.removeSpacing ? 0 : 4),
    '&.fullWidth': {
      width: '100%',
    },
  },
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    marginLeft: props => (props.removeSpacing ? 0 : 10),
    '& > div': {
      margin: 0,
      padding: 0,
    },
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 34,
    bottom: 7,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    left: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function NoOptionsMessage({ children, innerProps, selectProps }) {
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.noOptionsMessage}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

NoOptionsMessage.defaultProps = {
  children: null,
  innerProps: null,
};

NoOptionsMessage.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function Option({ children, innerRef, innerProps, isFocused, isSelected }) {
  return (
    <MenuItem
      ref={innerRef}
      selected={isFocused}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
      {...innerProps}
    >
      {children}
    </MenuItem>
  );
}

Option.defaultProps = {
  children: null,
  innerProps: null,
  innerRef: () => {},
  isFocused: false,
  isSelected: false,
};

Option.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  isFocused: PropTypes.bool,
  isSelected: PropTypes.bool,
};

function MultiValue({ children, removeProps, data }) {
  const node = data && data.node;

  let src;
  if (node) {
    src = node.profilePhoto || (node.profilePhotos && node.profilePhotos[0]);
  }

  return (
    <PeaTag
      tabIndex={-1}
      src={src}
      label={children}
      onDelete={removeProps.onClick}
      onClick={removeProps.onClick}
      color="primary"
    />
  );
}

MultiValue.propTypes = {
  children: PropTypes.node.isRequired,
  removeProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    onMouseDown: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
    node: PropTypes.shape({
      id: PropTypes.string,
      profilePhoto: PropTypes.string,
      profilePhotos: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

MultiValue.defaultProps = {
  data: undefined,
};

function ValueContainer({ selectProps, children }) {
  return <div className={selectProps.classes.valueContainer}>{children}</div>;
}

ValueContainer.defaultProps = {
  children: null,
};

ValueContainer.propTypes = {
  children: PropTypes.node,
  selectProps: PropTypes.object.isRequired,
};

const PeaAutocompleteList = ({
  label,
  noOptionsMessage,
  placeholder,
  canCreate,
  suggestions,
  getSuggestions,
  InputControl,
  OptionComponent,
  onChange,
  isMulti,
  fullWidth,
  hideSuggestions,
  clearAfterEnter,
  value: propValue,
  removeSpacing,
  menuPlacement,
  autoFocus,
}) => {
  const classes = useStyles({ removeSpacing, isUpsideDown: true });
  const theme = useTheme();
  const [value, setValue] = useState(propValue);
  const [inputValue, setInputValue] = useState('');
  const isAsync = !!getSuggestions;

  useEffect(() => {
    setValue(propValue);
  }, [propValue]);

  function handleSelectChange(val) {
    let newValue = val;
    if (Array.isArray(val)) {
      newValue = uniqBy(val, 'value');
    }
    if (!clearAfterEnter) {
      setValue(newValue);
    }
    onChange(newValue);
  }

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  const components = {
    NoOptionsMessage,
    Option: OptionComponent,
    MultiValue,
    ValueContainer,
    Control: InputControl,
    DropdownIndicator: null,
  };

  const handleKeyDown = event => {
    if (!canCreate || !inputValue) {
      return;
    }
    const newVal = { label: inputValue, value: inputValue };

    switch (event.key) {
      default:
        return;
      case 'Enter':
      case 'Tab':
        event.preventDefault();
        setInputValue('');
        if (isMulti) {
          handleSelectChange([...value, newVal]);
        } else {
          handleSelectChange(newVal);
        }
    }
  };

  const handleInputChange = val => {
    setInputValue(val);
  };

  const syncProps = isAsync
    ? {}
    : {
        menuIsOpen: !canCreate || hideSuggestions ? false : undefined,
        onKeyDown: handleKeyDown,
        onInputChange: handleInputChange,
        options: suggestions,
      };

  let SelectComponent = canCreate ? Creatable : Select;

  if (isAsync) {
    SelectComponent = canCreate ? AsyncCreatable : AsyncSelect;
  }

  const key = value && value.length ? JSON.stringify(value) : inputValue;

  const onBlur = () => {
    if (inputValue) {
      const newVal = { label: inputValue, value: inputValue };
      if (isMulti) {
        handleSelectChange([...value, newVal]);
      } else {
        handleSelectChange(newVal);
      }
    }
  };

  return (
    <div className={cx(classes.root, fullWidth && 'fullWidth')}>
      <SelectComponent
        key={key}
        classes={classes}
        styles={selectStyles}
        inputId="react-select-single"
        placeholder={placeholder}
        autoFocus={autoFocus}
        value={value}
        inputValue={inputValue.length ? inputValue : undefined}
        isClearable
        openMenuOnClick={!isAsync}
        cacheOptions={isAsync}
        loadOptions={getSuggestions}
        noOptionsMessage={() => noOptionsMessage}
        components={components}
        onChange={handleSelectChange}
        onBlur={onBlur}
        isMulti={isMulti}
        menuShouldScrollIntoView
        menuPlacement={menuPlacement}
        TextFieldProps={{
          label,
        }}
        {...syncProps}
      />
    </div>
  );
};

PeaAutocompleteList.defaultProps = {
  noOptionsMessage: 'No results found',
  label: undefined,
  canCreate: true,
  placeholder: '',
  fullWidth: true,
  isLoading: false,
  clearOnFocus: true,
  getSuggestions: undefined,
  hideSuggestions: false,
  clearAfterEnter: false,
  suggestions: [],
  value: [],
  isMulti: false,
  InputControl: PeaSearchInputControl,
  OptionComponent: Option,
  removeSpacing: false,
  menuPlacement: 'auto',
  autoFocus: false,
};

PeaAutocompleteList.propTypes = {
  noOptionsMessage: PropTypes.string,
  label: PropTypes.string,
  canCreate: PropTypes.bool,
  value: PropTypes.arrayOf(PropTypes.object),
  isMulti: PropTypes.bool,
  isLoading: PropTypes.bool,
  getSuggestions: PropTypes.func,
  placeholder: PropTypes.string,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ),
  fullWidth: PropTypes.bool,
  clearOnFocus: PropTypes.bool,
  InputControl: PropTypes.func,
  OptionComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  onChange: PropTypes.func.isRequired,
  hideSuggestions: PropTypes.bool,
  clearAfterEnter: PropTypes.bool,
  removeSpacing: PropTypes.bool,
  menuPlacement: PropTypes.string,
  autoFocus: PropTypes.bool,
};

PeaAutocompleteList.metadata = {
  name: 'Pea AutocompleteList',
};
PeaAutocompleteList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaAutocompleteList;
