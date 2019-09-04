/* eslint-disable max-len */
import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import PeaIcon from './PeaIcon';

const styles = () => ({
  root: {
    display: 'flex',
  },
  inputRoot: {
    '& input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    width: 32,
  },
  inputInput: {
    textAlign: 'center',
  },
  iconButton: {
    padding: 4,
  },
  icon: {
    fontSize: 36,
  },
});

const PeaCounter = withStyles(styles, { name: 'PeaCounter' })(
  ({ classes, value, name, onChange, min, max, ...props }) => {
    const handleButtonClicked = operator => () => {
      const newVal = parseInt(value, 10) + operator;
      if (newVal > max || newVal < min) {
        return;
      }
      onChange({ target: { value: newVal, name } });
    };

    const handleInputChange = e => {
      const newVal = e.target.value
        ? parseInt(e.target.value, 10)
        : e.target.value;
      onChange({ target: { value: newVal, name } });
    };

    const handleBlur = () => {
      if (value > max) {
        onChange({ target: { value: max, name } });
      }
      if (value < min) {
        onChange({ target: { value: min, name } });
      }
    };

    return (
      <div className={cx('PeaCounter-root', classes.root)}>
        <IconButton
          className={classes.iconButton}
          onClick={handleButtonClicked(-1)}
        >
          <PeaIcon
            className={classes.icon}
            icon={'remove_circle'}
            color={'secondary'}
          />
        </IconButton>

        <InputBase
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          type={'number'}
          name={name}
          value={value}
          onChange={handleInputChange}
          onBlur={handleBlur}
          {...props}
        />

        <IconButton
          className={classes.iconButton}
          onClick={handleButtonClicked(1)}
        >
          <PeaIcon
            className={classes.icon}
            icon={'add_circle'}
            color={'secondary'}
          />
        </IconButton>
      </div>
    );
  },
);

PeaCounter.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
};

PeaCounter.defaultProps = {
  onChange: () => {},
  min: 0,
  max: 1000,
};

PeaCounter.metadata = {
  name: 'Pea Counter',
  libraries: [
    {
      text: 'clsx',
      link: 'https://github.com/lukeed/clsx',
    },
  ],
};

PeaCounter.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaCounter;
