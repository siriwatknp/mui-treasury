/* eslint-disable react/forbid-prop-types,react/no-did-update-set-state */
import React from 'react';
import isEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';

class ShouldUpdate extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { value } = this.props;
    const { value: nextValue } = nextProps;
    return !isEqual(value, nextValue);
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

ShouldUpdate.propTypes = {
  value: PropTypes.any.isRequired,
  children: PropTypes.element.isRequired,
};

export default ShouldUpdate;
