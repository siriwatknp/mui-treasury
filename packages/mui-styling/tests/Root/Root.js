import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../src';
import Parent from '../Parent';
import createStyles from './Root.styles';

const options = { name: 'Root' };

const Root = withStyles(createStyles, options)(props => {
  const { items, css, childOverrides } = props;
  return (
    <div className={css.root}>
      {items.map(label => (
        <Parent
          key={label}
          label={label}
          childOverrides={childOverrides}
          {...Parent.getOverrides(css, props)}
        />
      ))}
    </div>
  );
});

Root.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  overrides: PropTypes.shape({}),
  classes: PropTypes.shape({}),
  parentOverrides: PropTypes.shape({}),
  childOverrides: PropTypes.shape({}),
};
Root.defaultProps = {
  items: [],
  overrides: undefined,
  classes: undefined,
  parentOverrides: undefined,
  childOverrides: undefined,
};
Root.displayName = 'Root';

export default Root;
