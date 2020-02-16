import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import styles from './orgChart.styles';

const defaultUseStyles = makeStyles(styles, { name: 'OrgChart' });

const OrgChart = ({
  treeData,
  renderContent,
  useStyles = defaultUseStyles,
  ...props
}) => {
  const classes = useStyles(props);

  const renderBranches = (branches, level) => {
    return (
      <ul className={classes.branches}>
        {branches?.map?.((item, index, array) => {
          const { children, ...data } = item || {};
          return (
            <li key={index} className={classes.aBranch}>
              {children ? (
                <>
                  <div className={classes.stem}>
                    {renderContent(data, {
                      level,
                      index,
                      siblings: array,
                      root: false,
                      ended: false,
                    })}
                  </div>
                  {renderBranches(children, level + 1)}
                </>
              ) : (
                <div className={classes.tip}>
                  {renderContent(data, {
                    level,
                    index,
                    siblings: array,
                    root: false,
                    ended: true,
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };
  const renderRoot = branchLevel => (item, index = 0, array = []) => {
    const { children, ...data } = item || {};
    return (
      <li key={index} className={classes.root}>
        <div className={classes.stem}>
          {renderContent(data, {
            level: branchLevel,
            index,
            siblings: array,
            root: true,
            ended: !!children,
          })}
        </div>
        {children && renderBranches(children, branchLevel)}
      </li>
    );
  };
  return (
    <>
      {Array.isArray(treeData) ? (
        treeData.map(renderRoot(1))
      ) : (
        <ul className={classes.tree}>{renderRoot(0)(treeData)}</ul>
      )}
    </>
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
  renderContent: item => <Avatar {...item} />,
  useStyles: undefined,
};

export default OrgChart;
