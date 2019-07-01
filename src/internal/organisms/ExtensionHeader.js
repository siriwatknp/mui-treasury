import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';

import Toolbar from '@material-ui/core/Toolbar';
import ChromeTabs from 'components/tabs/ChromeTabs';
import ElevatedTabs from 'components/tabs/ElevatedTabs';
import FirebaseTabs from 'components/tabs/FirebaseTabs';
import InstagramTabs from 'components/tabs/InstagramTabs';
import PillsTabs from 'components/tabs/PillsTabs';
import TwitterIconTabs from 'components/tabs/TwitterIconTabs';

import TwitterTabs from 'components/tabs/TwitterTabs';
import Typography from 'extensions/Typography';
import Button from 'extensions/Button';
import Icon from 'extensions/Icon';

const Tabs = [
  {
    component: ChromeTabs,
    hasLabel: true,
  },
  {
    component: ElevatedTabs,
    hasLabel: true,
  },
  {
    component: FirebaseTabs,
    hasLabel: true,
    appBarProps: {
      color: 'secondary',
      elevation: 2,
    },
  },
  {
    component: InstagramTabs,
    hasLabel: true,
    hasIcon: true,
  },
  {
    component: PillsTabs,
    hasLabel: true,
  },
  {
    component: TwitterIconTabs,
    hasIcon: true,
    tabsProps: {
      variant: 'standard',
    },
  },
  {
    component: TwitterTabs,
    hasLabel: true,
    tabsProps: {
      variant: 'standard',
    },
  },
];

const useStyles = makeStyles(() => ({
  appBar: { borderBottom: 'none' },
  appBarColorDefault: { background: '#eeeeee' },
  toolbarTitle: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: 24,
    paddingBottom: 16,
  },
}));

const ExtensionHeader = ({ index, setIndex, title, subtitle, version }) => {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = useState(0);
  const currentTab = Tabs[tabIndex];
  const tabs = [
    { label: 'Showcases', icon: <Icon>fa fa-boxes-alt</Icon> },
    {
      label: 'How to',
      icon: <Icon>fa fa-download</Icon>,
      badgeProps: { badgeContent: '' },
    },
  ];
  const renderButton = () => (
    <>
      <Button
        color={'inherit'}
        size={'small'}
        icon={'fa fa-repeat'}
        onClick={() =>
          setTabIndex(tabIndex === Tabs.length - 1 ? 0 : tabIndex + 1)
        }
        style={{ marginRight: 8 }}
      >
        Change tab style
      </Button>
      <Button
        color={'inherit'}
        size={'small'}
        component={Link}
        icon={'fa fa-window'}
        to={'/components/tabs'}
      >
        Browse tabs
      </Button>
    </>
  );
  return (
    <>
      <AppBar
        classes={{
          root: classes.appBar,
          colorDefault: classes.appBarColorDefault,
        }}
        position={'static'}
        elevation={0}
        color={'default'}
        {...currentTab.appBarProps}
      >
        <Toolbar className={classes.toolbarTitle}>
          <Typography
            spacing={'small'}
            variant={'h4'}
            weight={900}
            gutterBottom
          >
            {title} <code>{version}</code>
          </Typography>
          <Typography weight={400} size={'big'}>
            {subtitle}
          </Typography>
        </Toolbar>
        <Toolbar>
          <currentTab.component
            {...currentTab.tabsProps}
            value={index}
            style={{ alignSelf: 'flex-end' }}
            onChange={(_, i) => setIndex(i)}
            tabs={tabs.map(({ label, icon, ...rest }) => ({
              ...(currentTab.hasLabel && { label }),
              ...(currentTab.hasIcon && { icon }),
              ...rest,
            }))}
            tabStyle={{
              bgColor: '#eeeeee',
              selectedBgColor: '#ffffff',
            }}
          />
          <Hidden only={'xs'}>
            <Box ml={'auto'} mt={2} pl={3} flexShrink={0}>
              {renderButton()}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden smUp>
        <Box px={2} mt={3} mb={-2}>
          {renderButton()}
        </Box>
      </Hidden>
    </>
  );
};

ExtensionHeader.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  version: PropTypes.string.isRequired,
};

export default ExtensionHeader;
