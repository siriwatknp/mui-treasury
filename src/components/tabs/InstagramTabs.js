import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useTabsStyles = makeStyles(() => ({
  root: {
    borderTop: '1px solid #efefef',
    overflow: 'visible',
  },
  fixed: {
    overflow: 'visible !important',
  },
  indicator: {
    height: 1,
    transform: 'translateY(-52px)',
    backgroundColor: '#262626',
  },
}));

const useTabStyles = makeStyles(({ breakpoints }) => ({
  root: {
    lineHeight: 'inherit',
    minWidth: 0,
    '&:not(:last-child)': {
      marginRight: 24,
      [breakpoints.up('sm')]: {
        marginRight: 60,
      },
    },
    [breakpoints.up('md')]: {
      minWidth: 0,
    },
  },
  labelIcon: {
    minHeight: 53,
    '& $wrapper > *:first-child': {
      marginBottom: 0,
    },
  },
  textColorInherit: {
    opacity: 0.4,
  },
  wrapper: {
    flexDirection: 'row',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    '& svg, .material-icons': {
      fontSize: 16,
      marginRight: 8,
    },
  },
}));

const InstagramTabs = ({ tabs, tabProps, ...props }) => {
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

InstagramTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ),
  tabProps: PropTypes.shape({}),
};
InstagramTabs.defaultProps = {
  tabs: [],
  tabProps: {},
};

export default InstagramTabs;
