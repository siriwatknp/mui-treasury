import React from 'react';
import PropTypes from 'prop-types';
import Color from 'color';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useTabsStyles = makeStyles(() => ({
  root: {
    overflow: 'visible',
  },
  scroller: {
    overflow: 'visible!important',
  },
  indicator: {
    display: 'none',
  },
}));

const useTabStyles = makeStyles(({ palette, spacing, breakpoints }) => {
  const defaultBgColor = palette.grey[500];
  const defaultSelectedBgColor = '#ffffff';
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
      minHeight: spacing(7),
      color: getTextColor(bgColor),
      background: 'rbga(0,0,0,0)',
      transition: '0.2s',
      [breakpoints.up('md')]: {
        minWidth: minWidth.md,
      },
      '&:before': {
        content: '" "',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: bgColor,
        transform: 'skewY(-6deg)',
        transformOrigin: '100%',
      },
      '&:after': {
        pointerEvents: 'none',
        transition: '0.2s',
        content: '" "',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        transform: 'translateX(100%)',
        display: 'block',
        width: 8,
        zIndex: 2,
        background:
          // eslint-disable-next-line max-len
          'linear-gradient(to top right, rgba(0,0,0,0.2), rgba(0,0,0,0.2) 45%, transparent, transparent 64%)',
      },
    }),
    selected: ({ selectedBgColor = defaultSelectedBgColor }) => ({
      color: getTextColor(selectedBgColor),
      zIndex: 3,
      '&:before': {
        backgroundColor: selectedBgColor,
        boxShadow: '3px 3px 8px 0 rgba(0,0,0,0.38)',
      },
      '&:after': {
        width: spacing(3.5),
      },
    }),
    wrapper: {
      zIndex: 2,
      marginTop: spacing(1),
      textTransform: 'initial',
    },
  };
});

const SerratedTabs = ({ tabs, tabStyle, tabProps, ...props }) => {
  const tabsClasses = useTabsStyles(props);
  const tabClasses = useTabStyles({ ...tabProps, ...tabStyle });
  return (
    <Tabs {...props} classes={tabsClasses}>
      {tabs.map(tab => (
        <Tab key={tab.label} {...tabProps} {...tab} classes={tabClasses} />
      ))}
    </Tabs>
  );
};

SerratedTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.node.isRequired,
    }),
  ),
  tabStyle: PropTypes.shape({
    bgColor: PropTypes.string,
    minWidth: PropTypes.shape({}),
  }),
  tabProps: PropTypes.shape({}),
};
SerratedTabs.defaultProps = {
  tabs: [],
  tabStyle: {},
  tabProps: {},
};

export default SerratedTabs;
