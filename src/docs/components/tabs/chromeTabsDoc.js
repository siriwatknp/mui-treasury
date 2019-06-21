/* eslint-disable */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ChromeTabs from 'components/tabs/ChromeTabs';

const demoCode = `
  import React, { useState } from 'react';
  import AppBar from '@material-ui/core/AppBar';
  import Toolbar from '@material-ui/core/Toolbar';
  import ChromeTabs from './ChromeTabs';
  
  const Demo = () => {
    const [index, setIndex] = useState(0);
    return (
      <AppBar
        position={'static'}
        elevation={0}
        style={{ backgroundColor: '#E6E8EB' }}
      >
        <Toolbar>
          <ChromeTabs
            style={{ alignSelf: 'flex-end' }}
            tabs={[
              { label: 'Label 1' },
              { label: 'Label 2' },
              { label: 'Label 3' },
              { label: 'Label 4' },
            ]}
            tabStyle={{
              bgColor: '#E6E8EB',
              selectedBgColor: '#ffffff',
              color: 'rgba(0,0,0,0.87)',
            }}
            tabProps={{
              disableRipple: true,
            }}
            value={index}
            onChange={(e, i) => setIndex(i)}
          />
        </Toolbar>
      </AppBar>
    )
  }
  
  export default Demo;
`;

ChromeTabs.Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <AppBar
      position={'static'}
      elevation={0}
      style={{ backgroundColor: '#E6E8EB' }}
    >
      <Toolbar>
        <ChromeTabs
          style={{ alignSelf: 'flex-end' }}
          tabs={[
            { label: 'Label 1' },
            { label: 'Label 2' },
            { label: 'Label 3' },
            { label: 'Label 4' },
          ]}
          tabStyle={{
            bgColor: '#E6E8EB',
            selectedBgColor: '#ffffff',
            color: 'rgba(0,0,0,0.87)',
          }}
          tabProps={{
            disableRipple: true,
          }}
          value={index}
          onChange={(e, i) => setIndex(i)}
        />
      </Toolbar>
    </AppBar>
  );
};

const coreCode = `
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
  
  const ChromeTabs = ({ tabs, tabStyle, tabProps, ...props }) => {
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
    tabProps: PropTypes.shape({}),
  };
  ChromeTabs.defaultProps = {
    tabs: [],
    tabStyle: {},
    tabProps: {},
  };
  
  export default ChromeTabs;

`;

ChromeTabs.codeSandbox = 'https://codesandbox.io/s/vmzjw3o5l5';
ChromeTabs.info = {
  name: 'Chrome Tabs',
  description: 'Inspired by chrome.',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/vmzjw3o5l5' },
    {
      label: 'Official Examples',
      url: 'https://material-ui.com/components/tabs/',
    },
    { label: 'Tabs API', url: 'https://material-ui.com/api/tabs/' },
    { label: 'Tab API', url: 'https://material-ui.com/api/tab/' },
    {
      label: 'Styling',
      url: 'https://material-ui.com/styles/basics/#hook-api',
    },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'ChromeTabs.js',
      code: coreCode,
    },
  ],
  libraries: [
    {
      label: 'Qix-/Color',
      url: 'https://github.com/Qix-/color',
    },
  ],
  dependencies: ['color'],
};

export default ChromeTabs;
