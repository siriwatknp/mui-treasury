import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '../../src';
import createStyles from './Child.styles';

const Child = withStyles(createStyles, { name: 'Child' })(({ css }) => (
  <div className={css.childRoot}>
    <span className={css.childDot}>text</span>
  </div>
));

Child.propTypes = {
  overrides: PropTypes.shape({}),
  classes: PropTypes.shape({}),
};
Child.defaultProps = {
  overrides: undefined,
  classes: undefined,
};

export default Child;
