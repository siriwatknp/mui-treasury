import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Children from './submodules/Children';
import Couple from './submodules/Couple';
import styles from './familyTreeChart.styles';

const useStyles = makeStyles(styles, { name: 'FamilyTree' });

const FamilyTreeChart = ({ treeData }) => {
  const classes = useStyles();
  if (!treeData) return null;
  const renderChildren = (children, { stretch } = {}) => {
    const multiSpouses = children
      .map((item, index) => ({ ...item, __index: index }))
      .filter(({ spouse }) => Array.isArray(spouse))
      .map(({ __index }) => __index);
    console.log('multiSpouses', multiSpouses);
    return (
      <Children
        stretch={stretch}
        multiSpouses={multiSpouses}
        people={children}
        useStyles={useStyles}
        renderBranches={renderChildren}
        renderSpouses={renderChildren}
      />
    );
  };
  return (
    <ul className={classes.tree}>
      <li className={classes.root}>
        <Couple {...treeData} useStyles={useStyles} />
        {renderChildren(treeData.children)}
      </li>
    </ul>
  );
};

FamilyTreeChart.propTypes = {
  treeData: PropTypes.shape({}),
};
FamilyTreeChart.defaultProps = {
  treeData: undefined,
};

export default FamilyTreeChart;
