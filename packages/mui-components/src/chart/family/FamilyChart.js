import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';
import Tree from '../tree';
import { Inheritor, Spouse, Children, Person } from './submodules';
import styles from './familyChart.styles';

const useStyles = makeStyles(styles, { name: 'FamilyChart' });

const FamilyChart = ({
  tree,
  renderContent,
  stretchIndexes = [],
  ...props
}) => {
  if (!tree) return null;
  const inspectPerson = item => {
    const hasOneSpouse = item.spouse && !Array.isArray(item.spouse);
    const hasManySpouses = item.spouse && Array.isArray(item.spouse);
    const hasChildren = item.children && item.children.length > 0;
    return { hasOneSpouse, hasManySpouses, hasChildren };
  };
  const renderChildren = (children = [], { index, noStretched } = {}) => {
    return (
      <Children stretch={stretchIndexes.includes(index) && !noStretched}>
        {children.map((item, i) => {
          const { hasOneSpouse, hasManySpouses, hasChildren } = inspectPerson(
            item
          );
          const extraInfo = {
            level: index,
            index: i,
            array: children,
            hasOneSpouse,
            hasManySpouses,
            hasChildren,
          };
          return (
            <Inheritor key={i} hasOneSpouse={hasOneSpouse}>
              <Tree.Stem>
                {renderContent(item, {
                  isSpouse: false,
                  ...extraInfo,
                })}
              </Tree.Stem>
              {hasOneSpouse && (
                <Spouse hasChildren={hasChildren}>
                  {renderContent(item.spouse, {
                    isSpouse: true,
                    ...extraInfo,
                  })}
                </Spouse>
              )}
              {hasManySpouses &&
                renderChildren(item.spouse, {
                  index: index + 1,
                  noStretched: true,
                })}
              {hasChildren &&
                !hasManySpouses &&
                renderChildren(item.children, { index: index + 1 })}
            </Inheritor>
          );
        })}
      </Children>
    );
  };
  const { hasOneSpouse, hasManySpouses, hasChildren } = inspectPerson(tree);
  const extraInfo = {
    level: 0,
    index: 0,
    array: [],
    hasOneSpouse,
    hasManySpouses,
    hasChildren,
  };
  return (
    <Tree useStyles={useStyles} {...props}>
      <Tree.Trunk>
        <div>
          <Tree.Stem>
            {renderContent(tree, { isSpouse: false, ...extraInfo })}
          </Tree.Stem>
          {hasOneSpouse && (
            <Spouse hasChildren={hasChildren}>
              {renderContent(tree.spouse, { isSpouse: true, ...extraInfo })}
            </Spouse>
          )}
        </div>
      </Tree.Trunk>
      {renderChildren(tree.children, { index: 1 })}
    </Tree>
  );
};

FamilyChart.propTypes = {
  tree: PropTypes.shape({}),
  renderContent: PropTypes.func,
  stretchIndexes: PropTypes.arrayOf(PropTypes.number),
  avatarSize: PropTypes.number,
  personHeight: PropTypes.number,
  length: PropTypes.number,
  gutter: PropTypes.number,
  outline: PropTypes.string,
};
FamilyChart.defaultProps = {
  tree: undefined,
  renderContent: props => <Person {...props} />,
  stretchIndexes: [],
  avatarSize: 48,
  personHeight: 72,
  length: 24,
  gutter: 24,
  outline: `1px solid ${blueGrey[100]}`,
};

export default FamilyChart;
