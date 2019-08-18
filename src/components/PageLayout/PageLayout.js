/* eslint-disable */
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { NestedMenuList } from '@mui-treasury/components';
import { Header, Nav, Content, Footer } from '@mui-treasury/layout';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import MenuRounded from '@material-ui/icons/MenuRounded';
import { useJupiterNestedMenu } from '@mui-treasury/styles';

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

const PageLayout = ({ location, children }) => {
  const headerStyles = useHeaderStyles();
  const jupiterStyles = useJupiterNestedMenu();
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
        <NestedMenuList
          classes={jupiterStyles}
          selectedKey={'button'}
          menus={menus1}
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
