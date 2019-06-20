/* eslint-disable */
import React, { useState } from 'react';
import Icon from '@material-ui/core/Icon';
import TwitterIconTabs from 'components/tabs/TwitterIconTabs';

const demoCode = `
  import React from 'react';
  import TwitterIconTabs from './TwitterIconTabs';
  
  const Demo = () => {
    const [index, onChange] = useState(0);
    return (
      <TwitterIconTabs
        tabs={[
          { icon: <Icon>home</Icon>, badgeProps: { badgeContent: '' } },
          { icon: <Icon>search</Icon> },
          { icon: <Icon>notifications</Icon>, badgeProps: { badgeContent: 2 } },
          { icon: <Icon>mail_outlined_rounded</Icon> },
        ]}
        value={index}
        onChange={(e, i) => setIndex(i)}
      />
    );
  }
  
  export default Demo;
`;

TwitterIconTabs.Demo = () => {
  const [index, setIndex] = useState(0);
  return (
    <TwitterIconTabs
      tabs={[
        { icon: <Icon>home</Icon>, badgeProps: { badgeContent: '' } },
        { icon: <Icon>search</Icon> },
        { icon: <Icon>notifications</Icon>, badgeProps: { badgeContent: 99 } },
        { icon: <Icon>mail_outlined_rounded</Icon> },
      ]}
      value={index}
      onChange={(e, i) => setIndex(i)}
    />
  );
};

const coreCode = `
  import React from 'react';
  import PropTypes from 'prop-types';
  import cx from 'clsx';
  import { makeStyles } from '@material-ui/styles';
  import Tabs from '@material-ui/core/Tabs';
  import Tab from '@material-ui/core/Tab';
  import Badge from '@material-ui/core/Badge';
  
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
        '& .MuiTab-label': {
          color: '#1da1f2',
        },
      },
      '&$selected': {
        '& *': {
          color: '#1da1f2',
        },
      },
      '&.MuiTab--iconOnly': {
        '& .MuiTab-wrapper': {
          width: 'auto',
          padding: 8,
          borderRadius: 25,
          color: '#657786',
          '&:hover': {
            color: '#1da1f2',
            backgroundColor: 'rgba(29, 161, 242, 0.1)',
          },
        },
      },
    },
    textColorInherit: {
      opacity: 1,
    },
    wrapper: {
      textTransform: 'none',
      fontSize: 15,
      fontWeight: 700,
      color: '#657786',
      '& svg, .material-icons': {
        fontSize: 26.25,
      },
    },
  }));
  
  const useBadgeStyles = makeStyles(({ palette }) => ({
    root: {
      [\`&.MuiBadge--dotted, &.MuiBadge--number\`]: {
        '& .MuiBadge-badge': {
          color: palette.common.white,
          backgroundColor: '#1da1f2',
        },
      },
      [\`&.MuiBadge--dotted .MuiBadge-badge\`]: {
        minWidth: 6,
        height: 6,
        top: 0,
        right: 4,
        padding: 0,
      },
      [\`&.MuiBadge--number .MuiBadge-badge\`]: {
        top: -4,
        right: 0,
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0.14rem',
        minWidth: 16,
        height: 16,
        fontSize: 10.7,
        fontWeight: 'bold',
      },
    },
    colorPrimary: {
      color: palette.common.white,
    },
  }));
  
  const TwitterIconTabs = ({ tabs, ...props }) => {
    const tabsClasses = useTabsStyles();
    const tabClasses = useTabStyles();
    const badgeClasses = useBadgeStyles();
    return (
      <Tabs variant={'fullWidth'} centered classes={tabsClasses} {...props}>
        {tabs.map((tab, i) => {
          const { badgeProps, icon, ...tabProps } = tab;
          return (
            <Tab
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className={'MuiTab--iconOnly'}
              classes={{
                ...tabClasses,
                wrapper: cx(tabClasses.wrapper, 'MuiTab-wrapper'),
              }}
              icon={icon}
              {...badgeProps && {
                icon: (
                  <Badge
                    className={
                      badgeProps.badgeContent === ''
                        ? 'MuiBadge--dotted'
                        : 'MuiBadge--number'
                    }
                    classes={{
                      ...badgeClasses,
                      badge: cx(badgeClasses.badge, 'MuiBadge-badge'),
                    }}
                    badgeContent={''}
                    invisible={false}
                    {...badgeProps}
                  >
                    {icon}
                  </Badge>
                ),
              }}
              disableRipple
              {...tabProps}
            />
          );
        })}
      </Tabs>
    );
  };
  
  TwitterIconTabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.node.isRequired,
      }),
    ),
  };
  TwitterIconTabs.defaultProps = {
    tabs: [],
  };
  
  export default TwitterIconTabs;

`;

TwitterIconTabs.codeSandbox = 'https://codesandbox.io/s/vj89w782o0';
TwitterIconTabs.info = {
  name: 'Twitter Icon Tabs',
  description: 'implement Twitter theme',
  links: [
    { label: 'Code Sandbox', url: 'https://codesandbox.io/s/vj89w782o0' },
    {
      label: 'Official Examples',
      url: 'https://material-ui.com/components/tabs/',
    },
    { label: 'Tabs API', url: 'https://material-ui.com/api/tabs/' },
    { label: 'Tab API', url: 'https://material-ui.com/api/tab/' },
    { label: 'Badge API', url: 'https://material-ui.com/api/badge/' },
  ],
  files: [
    {
      label: 'Demo.js',
      code: demoCode,
    },
    {
      label: 'TwitterIconTabs.js',
      code: coreCode,
    },
  ],
  libraries: [],
  dependencies: ['@material-ui/core'],
};

export default TwitterIconTabs;
