import React from 'react';
import PropTypes from 'prop-types';
import { TreeProvider } from './TreeContext';

const TreeChart = ({ children, ...props }) => {
  return <TreeProvider {...props}>{children}</TreeProvider>;
};

TreeChart.propTypes = {
  children: PropTypes.node,
  length: PropTypes.number,
  gutter: PropTypes.number,
  outline: PropTypes.string,
};
TreeChart.defaultProps = {
  children: null,
  length: undefined,
  gutter: undefined,
  outline: undefined,
};

export default TreeChart;
