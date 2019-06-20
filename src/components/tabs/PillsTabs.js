import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useTabsStyles = makeStyles(() => ({
  root: {
    width: '100%',
  },
  indicator: {
    display: 'none',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const useTabStyles = makeStyles(({ breakpoints }) => ({
  root: {
    position: 'relative',
    display: 'block',
    borderRadius: '30px',
    textAlign: 'center',
    transition: 'all .5s',
    padding: '10px 15px',
    color: '#555555',
    height: 'auto',
    opacity: '1',
    margin: '10px 0',
    float: 'none',
    [breakpoints.up('md')]: {
      minWidth: 120,
    },
    '& + button': {
      margin: '10px 0',
    },
    '&$selected': {
      '&, &:hover': {
        color: '#FFFFFF',
        backgroundColor: '#00acc1',
        boxShadow: '0 7px 10px -5px rgba(76, 175, 80, 0.4)',
      },
    },
  },
  selected: {},
  wrapper: {
    lineHeight: '24px',
    textTransform: 'uppercase',
    fontSize: '12px',
    fontWeight: '500',
    position: 'relative',
    display: 'block',
    color: 'inherit',
  },
}));

const PillsTabs = ({ tabs, ...props }) => {
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

PillsTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ),
};
PillsTabs.defaultProps = {
  tabs: [],
};
PillsTabs.metadata = {
  name: 'Pills Tabs',
  description: 'implement custom theme with elevated pills tabs',
};

PillsTabs.codeSandbox = 'https://codesandbox.io/s/q885853jkw';

export default PillsTabs;
