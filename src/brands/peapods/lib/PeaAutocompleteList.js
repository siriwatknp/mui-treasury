/* eslint-disable react/forbid-prop-types */
import React from 'react';
import Select from 'react-select';
import cx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    width: 360,
    padding: 4,
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

const PeaAutocompleteList = props => {
  const { placeholder, suggestions, fullWitdh, InputControl, onChange } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);

  function handleChangeSingle(value) {
    setSingle(value);
    onChange(value);
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

  if (!InputControl) {
    return null;
  }

  const components = {
    Menu,
    NoOptionsMessage,
    Option,
    Placeholder,
    SingleValue,
    ValueContainer,
    Control: InputControl.prototype.constructor,
  };

  return (
    <div className={cx(classes.root, fullWitdh && 'fullWidth')}>
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
  fullWitdh: false,
};

PeaAutocompleteList.propTypes = {
  placeholder: PropTypes.string,
  suggestions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  fullWitdh: PropTypes.bool,
  InputControl: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
};

PeaAutocompleteList.metadata = {
  name: 'Pea AutocompleteList',
};
PeaAutocompleteList.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaAutocompleteList;
