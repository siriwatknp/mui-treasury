/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  NestedMenuList,
  MenuToggle,
  MuiSvgArrowToggle,
} from '@mui-treasury/components';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { Header, Nav, Content, Footer } from '@mui-treasury/layout';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import {
  useJupiterNestedMenu,
  useGatsbyNestedMenu,
  useGatsbyMenuItem,
} from '@mui-treasury/styles';

const useHeaderStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    root: {
      backgroundColor: palette.common.white,
      borderBottom: `1px solid ${palette.divider}`,
    },
  };
});

const menus1 = [
  {
    key: 'basic',
    label: 'BASIC (5)',
    subMenus: [
      { key: 'arrow', label: 'Arrow' },
      { key: 'chat', label: 'Chat' },
      { key: 'input', label: 'Input' },
      { key: 'indicator', label: 'Indicator' },
      { key: 'slide', label: 'Slide' },
    ],
  },
  {
    key: 'complex',
    label: 'COMPLEX (4)',
    subMenus: [
      {
        key: 'card',
        label: 'Card',
        subMenus: [
          { key: 'postCard', label: 'Post Card' },
          { key: 'reviewCard', label: 'Review Card' },
          { key: 'project', label: 'Project Card' },
        ],
      },
      { key: 'carousel', label: 'Carousel' },
      { key: 'tabs', label: 'Tabs' },
      { key: 'textField', label: 'TextField' },
    ],
  },
];
const menus2 = [
  {
    key: 'intro',
    label: 'Introduction',
  },
  {
    key: 'quick start',
    label: 'Quick Start',
  },
  // {
  //   key: 'recipes',
  //   label: 'Recipes',
  // },
  // {
  //   key: 'pluginLib',
  //   label: 'Plugin Library',
  // },
  // {
  //   key: 'starterLib',
  //   label: 'Starter Library',
  // },
  {
    key: 'resources',
    label: 'Awesome Gatsby Resources',
  },
  {
    key: 'refGuides',
    label: 'Reference Guides',
    toggleSeparated: true,
    subMenus: [
      {
        key: 'preparingEnv',
        label: 'Preparing Your Environment',
        toggleSeparated: true,
        subMenus: [
          {
            key: 'browserSupport',
            label: 'Browser Support',
          },
          {
            key: 'gatsbyWindow',
            label: 'Gatsby on Windows',
          },
          {
            key: 'gatsbyLinux',
            label: 'Gatsby on Linux',
          },
        ],
      },
    ],
  },
  {
    key: 'api',
    label: 'Gatsby API',
    toggleSeparated: true,
    subMenus: [
      {
        key: 'themes',
        label: 'Gatsby Themes',
      },
      {
        key: 'link',
        label: 'Gatsby Link',
      },
      {
        key: 'image',
        label: 'Gatsby Image',
      },
      {
        key: 'config',
        label: 'Gatsby Config',
      },
    ],
  },
  {
    key: 'migration',
    label: 'Releases & Migration',
    toggleSeparated: true,
    subMenus: [
      {
        key: 'v2',
        label: 'v2 Release Notes',
      },
      {
        key: 'v1',
        label: 'v1 Release Notes',
      },
      {
        key: 'v1Tov2',
        label: 'Migration from v1 to v2',
      },
      {
        key: 'v0Tov1',
        label: 'Migration from v0 to v1',
      },
    ],
  },
];

const useButtonStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    root: { textTransform: 'unset' },
  };
});

const PageLayout = ({ location, children }) => {
  const headerStyles = useHeaderStyles();
  const jupiterStyles = useJupiterNestedMenu();
  const gatsbyStyles = useGatsbyNestedMenu();
  const gatsbyMenuItemStyles = useGatsbyMenuItem();
  const buttonStyles = useButtonStyles();
  const [isGatsby, setIsGatsby] = useState(false);
  return (
    <>
      <Header
        classes={headerStyles}
        renderMenuIcon={open => (open ? <ChevronLeft /> : <MenuRounded />)}
      />
      <Nav
        renderIcon={collapsed =>
          collapsed ? <ChevronRight /> : <ChevronLeft />
        }
      >
        <Box p={2}>
          <Button
            classes={buttonStyles}
            color={'secondary'}
            onClick={() => setIsGatsby(!isGatsby)}
          >
            use {isGatsby ? 'default' : 'Gatsby'} styles
          </Button>
        </Box>
        <NestedMenuList
          classes={isGatsby ? gatsbyStyles : undefined}
          selectedKey={'button'}
          menus={menus2}
        />
      </Nav>
      <Content></Content>
      <Footer></Footer>
    </>
  );
};

PageLayout.propTypes = {};
PageLayout.defaultProps = {};

export default PageLayout;
