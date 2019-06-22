/* eslint-disable */
import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import FirebaseTabs from 'components/tabs/FirebaseTabs';

const demoCode = `
  import React from 'react';
  import AppBar from '@material-ui/core/AppBar';
  import FirebaseTabs from './FirebaseTabs';
  
  const Demo = () => {
    const [index, setIndex] = useState(0);
    return (
      <AppBar position={'static'}>
        <FirebaseTabs
          tabs={[
            { label: 'Data' },
            { label: 'Rules' },
            { label: 'Indexes' },
            { label: 'Usage' },
          ]}
          value={index}
          onChange={(e, i) => setIndex(i)}
        />
      </AppBar>
    );
  }
  
  export default Demo;
`;

FirebaseTabs.Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <AppBar position={'static'}>
      <FirebaseTabs
        tabs={[
          { label: 'Data' },
          { label: 'Rules' },
          { label: 'Indexes' },
          { label: 'Usage' },
        ]}
        value={index}
        onChange={(e, i) => setIndex(i)}
      />
    </AppBar>
  );
};

const coreCode = `
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

`;

FirebaseTabs.codeSandbox = 'https://codesandbox.io/s/13kjwkry7l';
FirebaseTabs.info = {
  name: 'Firebase Tabs',
  description: 'implement firebase theme (primary-color: #039be5)',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/13kjwkry7l' },
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
      label: 'FirebaseTabs.js',
      code: coreCode,
    },
  ],
  libraries: [],
  dependencies: [],
};

export default FirebaseTabs;
