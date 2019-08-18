import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../src';
import Child from '../Child';
import createStyles from './Parent.styles';

const options = { name: 'Parent' };

const Parent = withStyles(createStyles, options)(props => {
  const { label, css } = props;
  return (
    <div className={css.parentRoot}>
      <p className={css.parentLabel}>{label}</p>
      <Child {...Child.getOverrides(css, props)} />
    </div>
  );
});

Parent.propTypes = {
  label: PropTypes.string,
  overrides: PropTypes.shape({}),
  classes: PropTypes.shape({}),
  childOverrides: PropTypes.shape({}),
};
Parent.defaultProps = {
  label: '',
  overrides: undefined,
  classes: undefined,
  childOverrides: undefined,
};

export default Parent;
