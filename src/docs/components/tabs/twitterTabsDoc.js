/* eslint-disable */
import React, { useState } from 'react';
import TwitterTabs from 'components/tabs/TwitterTabs';

const demoCode = `
  import React from 'react';
  import TwitterTabs from './TwitterTabs';
  
  const Demo = () => {
    const [index, onChange] = useState(0);
    return (
      <TwitterTabs
        tabs={[
          { label: 'Tweet' },
          { label: 'Responses' },
          { label: 'Media' },
          { label: 'Liking' },
        ]}
        value={index}
        onChange={(e, i) => setIndex(i)}
      />
    );
  }
  
  export default Demo;
`;

TwitterTabs.Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <TwitterTabs
      tabs={[
        { label: 'Tweet' },
        { label: 'Responses' },
        { label: 'Media' },
        { label: 'Liking' },
      ]}
      value={index}
      onChange={(e, i) => setIndex(i)}
    />
  );
};

const coreCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import { makeStyles } from '@material-ui/styles';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  
  const useTabsStyles = makeStyles(() => ({
    root: {
      width: '100%',
      borderBottom: '1px solid #E6ECF0',
    },
    indicator: {
      backgroundColor: '#1da1f2',
    },
  }));
  
  const useTabStyles = makeStyles(({ breakpoints }) => ({
    root: {
      minHeight: 53,
      minWidth: 0,
      [breakpoints.up('md')]: {
        minWidth: 0,
      },
      '&:hover': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& .MuiTab-label': {
          color: '#1da1f2',
        },
      },
      '&$selected': {
        '& *': {
          color: '#1da1f2',
        },
      },
    },
    selected: {},
    textColorInherit: {
      opacity: 1,
    },
    wrapper: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
      color: '#657786',
    },
  }));
  
  const TwitterTabs = ({ tabs, ...props }) => {
    const tabsClasses = useTabsStyles();
    const tabClasses = useTabStyles();
    return (
      <Tabs variant={'fullWidth'} centered classes={tabsClasses} {...props}>
        {tabs.map(tab => (
          <Tab
            key={tab.label}
            classes={{
              ...tabClasses,
              wrapper: \`\${tabClasses.wrapper} MuiTab-label\`,
            }}
            disableRipple
            {...tab}
          />
        ))}
      </Tabs>
    );
  };
  
  TwitterTabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
      }),
    ),
  };
  TwitterTabs.defaultProps = {
    tabs: [],
  };
  
  export default TwitterTabs;

`;

TwitterTabs.codeSandbox = 'https://codesandbox.io/s/5w8kyy1nrk';
TwitterTabs.info = {
  name: 'Twitter Tabs',
  description: 'implement Twitter theme',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/5w8kyy1nrk' },
    {
      label: 'Official Examples',
      url: 'https://material-ui.com/components/tabs/',
    },
    { label: 'Tabs API', url: 'https://material-ui.com/api/tabs/' },
    { label: 'Tab API', url: 'https://material-ui.com/api/tab/' },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'TwitterTabs.js',
      code: coreCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};

export default TwitterTabs;
