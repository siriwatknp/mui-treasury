import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useSelectItem } from '@mui-treasury/utils';
import makeStyles from '@material-ui/styles/makeStyles';

const useTabsStyles = makeStyles(() => {
  return {
    indicator: {
      display: 'none',
    },
  };
});

const useTabItemStyles = makeStyles(() => {
  return {
    root: {
      border: '1px solid #e9e9e9',
      '&:not(:first-of-type)': {
        marginLeft: -1,
      },
      background: '#f7f7f7',
      opacity: 1,
    },
    selected: {
      borderBottomWidth: 0,
      background: '#ffffff',
      '& $wrapper': {
        opacity: 1,
      },
    },
    wrapper: {
      opacity: 0.7,
    },
  };
});

const BoxTabs = ({ children, tabs, tabItemProps, initialTabIndex }) => {
  const { selectedKey, setSelectedKey } = useSelectItem(initialTabIndex);
  const tabsStyles = useTabsStyles();
  const tabItemStyles = useTabItemStyles();
  const wrapContent = (content, wrapperProps) => (
    <Box
      border={'1px solid #e9e9e9'}
      py={2}
      px={3}
      mt={'-1px'}
      {...wrapperProps}
    >
      {content}
    </Box>
  );
  return (
    <>
      <Tabs
        classes={tabsStyles}
        value={selectedKey}
        onChange={(e, newValue) => setSelectedKey(newValue)}
      >
        {tabs.map(tab => (
          <Tab
            key={tab.label}
            classes={tabItemStyles}
            disableRipple
            {...tabItemProps}
            {...tab}
          />
        ))}
      </Tabs>
      {children([selectedKey, setSelectedKey], { wrapContent })}
    </>
  );
};

BoxTabs.propTypes = {
  initialTabIndex: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ),
  tabItemProps: PropTypes.shape({}),
  children: PropTypes.func,
};
BoxTabs.defaultProps = {
  initialTabIndex: 0,
  tabs: [],
  tabItemProps: {},
  children: () => {},
};

export default BoxTabs;
