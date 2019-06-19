/* eslint-disable */
import React, { useState } from 'react';
import ChromeTabs from 'components/tabs/ChromeTabs';

const demoCode = `
  import React, { useState } from 'react';
  import ChromeTabs from './ChromeTabs';
  
  const Demo = () => {
    const [index, setIndex] = useState(0);
    return (
      <ChromeTabs
        tabs={[
          { label: 'Label 1' },
          { label: 'Label 2' },
          { label: 'Label 3' },
          { label: 'Label 4' },
        ]}
        value={index}
        onChange={(e, i) => setIndex(i)}
      />
    )
  }
  
  export default Demo;
`;

ChromeTabs.Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <ChromeTabs
      tabs={[
        { label: 'Label 1' },
        { label: 'Label 2' },
        { label: 'Label 3' },
        { label: 'Label 4' },
      ]}
      value={index}
      onChange={(e, i) => setIndex(i)}
    />
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
  
  const useTabStyles = makeStyles(({ palette, spacing }) => {
    const bgColor = '#272C34';
    return {
      root: {
        opacity: 1,
        overflow: 'initial',
        paddingLeft: spacing(2),
        paddingRight: spacing(2),
        borderTopLeftRadius: spacing(1),
        borderTopRightRadius: spacing(1),
        color: Color(bgColor)
          .fade(0.13)
          .toString(),
        transition: '0.2s',
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
            backgroundColor: palette.grey[500],
          },
        },
        '& + $selected:before': {
          opacity: 0,
        },
        '&:hover': {
          '&:not($selected)': {
            backgroundColor: palette.grey[200],
          },
          '&::before': {
            opacity: 0,
          },
          '& + $root:before': {
            opacity: 0,
          },
        },
      },
      selected: {
        backgroundColor: bgColor,
        color: palette.common.white,
        '& + $root': {
          zIndex: 1,
        },
        '& + $root:before': {
          opacity: 0,
        },
      },
      wrapper: {
        zIndex: 2,
        textTransform: 'initial',
      },
    };
  });
  
  const ChromeTabs = ({ tabs, ...props }) => {
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
  
  ChromeTabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
      }),
    ),
  };
  ChromeTabs.defaultProps = {
    tabs: [],
  };
  
  export default ChromeTabs;
  
`;

ChromeTabs.codeSandbox = 'https://codesandbox.io/s/vmzjw3o5l5';
ChromeTabs.info = {
  name: 'Chrome Tabs',
  description: 'Inspired by chrome.',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/vmzjw3o5l5' },
    { label: 'Official Ex.', url: 'https://material-ui.com/components/tabs/' },
    { label: 'Tabs API', url: 'https://material-ui.com/api/tabs/' },
    { label: 'Tab API', url: 'https://material-ui.com/api/tab/' },
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
      label: 'Color',
      url: 'https://github.com/Qix-/color',
    },
  ],
  dependencies: ['@material-ui/core'],
};

export default ChromeTabs;
