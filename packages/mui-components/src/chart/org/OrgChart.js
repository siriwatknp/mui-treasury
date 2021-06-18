import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import Tree, { treeChartStyles } from '../tree';

const defaultUseStyles = makeStyles(treeChartStyles, { name: 'OrgChart' });

const OrgChart = ({ treeData, renderContent, useStyles, ...props }) => {
  if (!treeData) return null;
  const renderChildren = (children = []) => {
    return (
      <Tree.Branches>
        {children.map((item, index) => (
          <Tree.Twig key={index}>
            <Tree.Stem>{renderContent(item)}</Tree.Stem>
            {item.children && renderChildren(item.children)}
          </Tree.Twig>
        ))}
      </Tree.Branches>
    );
  };
  return (
    <Tree useStyles={useStyles} {...props}>
      <Tree.Trunk>
        {Array.isArray(treeData) ? (
          renderChildren(treeData)
        ) : (
          <>
            {renderContent(treeData)}
            {treeData.children && renderChildren(treeData.children)}
          </>
        )}
      </Tree.Trunk>
    </Tree>
  );
};

OrgChart.propTypes = {
  treeData: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  renderContent: PropTypes.func,
  useStyles: PropTypes.func,
};
OrgChart.defaultProps = {
  treeData: undefined,
  renderContent: () => <Avatar />,
  useStyles: defaultUseStyles,
};

export default OrgChart;
