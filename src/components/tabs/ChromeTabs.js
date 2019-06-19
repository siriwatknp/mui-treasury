import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useTabsStyles = makeStyles(() => ({
  indicator: {
    display: 'none',
  },
}));

const useTabStyles = makeStyles(({ palette, spacing, breakpoints }) => {
  const defaultBgColor = palette.grey[300];
  const defaultSelectedBgColor = '#272C34';
  const defaultMinWidth = {
    md: 120,
  };
  const getTextColor = color => {
    if (Color(color).isLight()) return palette.text.primary;
    return palette.common.white;
  };
  return {
    root: ({ bgColor = defaultBgColor, minWidth = defaultMinWidth }) => ({
      opacity: 1,
      overflow: 'initial',
      paddingLeft: spacing(2),
      paddingRight: spacing(2),
      borderTopLeftRadius: spacing(1),
      borderTopRightRadius: spacing(1),
      color: getTextColor(bgColor),
      backgroundColor: bgColor,
      transition: '0.2s',
      [breakpoints.up('md')]: {
        minWidth: minWidth.md,
      },
      '&:before': {
        transition: '0.2s',
      },
      '&:not(:first-of-type)': {
        '&:before': {
          content: '" "',
          position: 'absolute',
          left: 0,
          display: 'block',
          height: 20,
          width: 1,
          zIndex: 1,
          marginTop: spacing(0.5),
          backgroundColor: palette.grey[500],
        },
      },
      '& + $selected:before': {
        opacity: 0,
      },
      '&:hover': {
        '&:not($selected)': {
          backgroundColor: Color(bgColor)
            .whiten(0.6)
            .hex(),
        },
        '&::before': {
          opacity: 0,
        },
        '& + $root:before': {
          opacity: 0,
        },
      },
    }),
    selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
      backgroundColor: selectedBgColor,
      color: getTextColor(selectedBgColor),
      '& + $root': {
        zIndex: 1,
      },
      '& + $root:before': {
        opacity: 0,
      },
    }),
    wrapper: {
      zIndex: 2,
      marginTop: spacing(0.5),
      textTransform: 'initial',
    },
  };
});

const ChromeTabs = ({ tabs, tabStyle, ...props }) => {
  const tabsClasses = useTabsStyles();
  const tabClasses = useTabStyles(tabStyle);
  return (
    <Tabs classes={tabsClasses} {...props}>
      {tabs.map(tab => (
        <Tab key={tab.label} classes={tabClasses} {...tab} />
      ))}
    </Tabs>
  );
};

ChromeTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ),
  tabStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    minWidth: PropTypes.shape({}),
  }),
};
ChromeTabs.defaultProps = {
  tabs: [],
  tabStyle: {},
};

export default ChromeTabs;
