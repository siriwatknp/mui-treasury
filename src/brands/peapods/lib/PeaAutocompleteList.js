/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Select from 'react-select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

import PeaSearchInput from './PeaSearchInput';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    flexGrow: 1,
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
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 46,
    bottom: 14,
    fontSize: 16,
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
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

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} />;
}

inputComponent.defaultProps = {
  inputRef: () => {},
};

inputComponent.propTypes = {
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

function Control({
  children,
  innerProps,
  innerRef,
  selectProps: { classes, TextFieldProps },
}) {
  return (
    <PeaSearchInput
      fullWidth
      inputComponent={inputComponent}
      inputProps={{
        className: classes.input,
        ref: innerRef,
        children,
        ...innerProps,
      }}
      {...TextFieldProps}
    />
  );
}

Control.defaultProps = {
  children: null,
  innerProps: null,
  innerRef: () => {},
};

Control.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
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

function Placeholder({ children, innerProps, selectProps }) {
  return (
    <Typography
      color="textSecondary"
      className={selectProps.classes.placeholder}
      {...innerProps}
    >
      {children}
    </Typography>
  );
}

Placeholder.defaultProps = {
  children: null,
  innerProps: null,
};

Placeholder.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
};

function SingleValue({ children, innerProps, selectProps }) {
  return (
    <Typography className={selectProps.classes.singleValue} {...innerProps}>
      {children}
    </Typography>
  );
}

SingleValue.defaultProps = {
  children: null,
  innerProps: null,
};

SingleValue.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object.isRequired,
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

function Menu({ selectProps, innerProps, children }) {
  return (
    <Paper square className={selectProps.classes.paper} {...innerProps}>
      {children}
    </Paper>
  );
}

Menu.defaultProps = {
  children: null,
  innerProps: null,
  selectProps: null,
};

Menu.propTypes = {
  children: PropTypes.node,
  innerProps: PropTypes.object,
  selectProps: PropTypes.object,
};

const components = {
  Control,
  Menu,
  NoOptionsMessage,
  Option,
  Placeholder,
  SingleValue,
  ValueContainer,
};

const PeaAutocompleteList = ({ placeholder, suggestions }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);

  function handleChangeSingle(value) {
    setSingle(value);
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

  return (
    <div className={classes.root}>
      <Select
        classes={classes}
        styles={selectStyles}
        inputId="react-select-single"
        TextFieldProps={{
          InputLabelProps: {
            htmlFor: 'react-select-single',
            shrink: true,
          },
        }}
        placeholder={placeholder}
        isSearchable
        isClearable
        options={suggestions}
        components={components}
        value={single}
        onChange={handleChangeSingle}
      />
    </div>
  );
};

PeaAutocompleteList.defaultProps = {
  placeholder: '',
};

PeaAutocompleteList.propTypes = {
  placeholder: PropTypes.string,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

PeaAutocompleteList.metadata = {
  name: 'Pea AutocompleteList',
};
PeaAutocompleteList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaAutocompleteList;
