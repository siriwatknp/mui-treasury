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
  ({ classes, value, name, onChange, ...props }) => {
    const handleChange = operator => () =>
      onChange({ target: { value: parseInt(value, 10) + operator, name } });

    return (
      <div className={cx('PeaCounter-root', classes.root)}>
        <IconButton className={classes.iconButton} onClick={handleChange(-1)}>
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
          onChange={onChange}
          {...props}
        />

        <IconButton className={classes.iconButton} onClick={handleChange(1)}>
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
};

PeaCounter.defaultProps = {
  onChange: () => {},
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
