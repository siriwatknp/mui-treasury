/* eslint-disable */
import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import InstagramTabs from 'components/tabs/InstagramTabs';

const demoCode = `
  import React from 'react';
  import Icon from '@material-ui/core/Icon';
  import InstagramTabs from './InstagramTabs';
  
  const Demo = () => {
    const [index, setIndex] = useState(0);
    return (
      <InstagramTabs
        tabs={[
          {
            label: 'Posts',
            disableRipple: true,
            icon: <Icon>grid_on_outlined</Icon>,
          },
          { label: 'IGTV', disableRipple: true, icon: <Icon>live_tv</Icon> },
          {
            label: 'Saved',
            disableRipple: true,
            icon: <Icon>bookmark_border_outlined</Icon>,
          },
          { label: 'Tagged', disableRipple: true },
        ]}
        value={index}
        onChange={(e, i) => setIndex(i)}
      />
    );
  }
  
  export default Demo;
`;

InstagramTabs.Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <InstagramTabs
      tabs={[
        {
          label: 'Posts',
          disableRipple: true,
          icon: <Icon>grid_on_outlined</Icon>,
        },
        { label: 'IGTV', disableRipple: true, icon: <Icon>live_tv</Icon> },
        {
          label: 'Saved',
          disableRipple: true,
          icon: <Icon>bookmark_border_outlined</Icon>,
        },
        { label: 'Tagged', disableRipple: true },
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
      borderTop: '1px solid #efefef',
      overflow: 'visible',
    },
    fixed: {
      overflowX: 'visible',
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
  
  const InstagramTabs = ({ tabs, ...props }) => {
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
  
  InstagramTabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.node.isRequired,
      }),
    ),
  };
  InstagramTabs.defaultProps = {
    tabs: [],
  };
  InstagramTabs.metadata = {
    name: 'Instagram Tabs',
    description: 'implement Instagram theme',
  };
  InstagramTabs.codeSandbox = 'https://codesandbox.io/s/kkl6yq01v';
  
  export default InstagramTabs;


`;

InstagramTabs.codeSandbox = 'https://codesandbox.io/s/kkl6yq01v';
InstagramTabs.info = {
  name: 'Instagram Tabs',
  description: 'implement Instagram theme',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/kkl6yq01v' },
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
      label: 'InstagramTabs.js',
      code: coreCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};

export default InstagramTabs;
