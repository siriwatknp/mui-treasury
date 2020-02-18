import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { TreeProvider } from './TreeContext';
import styles from './treeChart.styles';

const useDefaultStyles = makeStyles(styles, { name: 'TreeChart' });

const TreeChart = ({ children, ...props }) => {
  return (
    <TreeProvider useStyles={useDefaultStyles} {...props}>
      {children}
    </TreeProvider>
  );
};

TreeChart.propTypes = {
  children: PropTypes.node,
  length: PropTypes.number,
  gutter: PropTypes.number,
  outline: PropTypes.string,
  useStyles: PropTypes.func,
};
TreeChart.defaultProps = {
  children: null,
  length: undefined,
  gutter: undefined,
  outline: undefined,
  useStyles: undefined,
};

export default TreeChart;
