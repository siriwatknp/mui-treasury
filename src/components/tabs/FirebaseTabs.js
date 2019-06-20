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

const FirebaseTabs = ({ tabs, ...props }) => {
  const tabsClasses = useTabsStyles();
  const tabClasses = useTabStyles();
  return (
    <Tabs classes={tabsClasses} {...props}>
      {tabs.map(tab => (
        <Tab key={tab.label} classes={tabClasses} {...tab} />
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
};
FirebaseTabs.defaultProps = {
  tabs: [],
};
FirebaseTabs.metadata = {
  name: 'Firebase Tabs',
  description: 'implement firebase theme (primary-color: #039be5)',
};
FirebaseTabs.codeSandbox = 'https://codesandbox.io/s/13kjwkry7l';

export default FirebaseTabs;
