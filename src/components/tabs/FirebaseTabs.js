import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useTabsStyles = makeStyles(({ spacing, palette }) => ({
  root: {
    marginLeft: spacing(1),
  },
  indicator: {
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: palette.common.white,
  },
}));

const useTabStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    textTransform: 'initial',
    margin: spacing(0, 2),
    minWidth: 0,
    [breakpoints.up('md')]: {
      minWidth: 0,
    },
  },
  wrapper: {
    fontWeight: 'normal',
    letterSpacing: 0.5,
  },
}));

const FirebaseTabs = ({ tabs, tabProps, ...props }) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles(tabProps);
  return (
    <Tabs {...props} classes={tabsClasses}>
      {tabs.map(tab => (
        <Tab key={tab.label} {...tab} classes={tabClasses} />
      ))}
    </Tabs>
  );
};

FirebaseTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ),
  tabProps: PropTypes.shape({}),
};
FirebaseTabs.defaultProps = {
  tabs: [],
  tabProps: {},
};

export default FirebaseTabs;
