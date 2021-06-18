import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/styles/makeStyles';
import styled from 'styled-components';
import {
  getHeader,
  getDrawerSidebar,
  getSidebarContent,
  getContent,
  getFooter,
  getCollapseBtn,
  getSidebarTrigger,
} from '@mui-treasury/layout';
import Toolbar from '@material-ui/core/Toolbar';
import PageHeader from 'components/layout/PageHeader';
import PageFooter from 'components/layout/PageFooter';
import ComponentMenuList from 'components/organisms/ComponentMenuList';
import useQueryParams from '../../utils/useQueryParams';

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);
const CollapseBtn = getCollapseBtn(styled);
const SidebarTrigger = getSidebarTrigger(styled);

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    header: {
      backgroundColor: palette.common.white,
      borderBottom: `1px solid ${palette.divider}`,
    },
    trigger: ({ hamburgerHidden }) => ({
      display: hamburgerHidden ? 'none' : '',
    }),
  };
});

const useFooterStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));

const PageLayout = ({ menus, children, getOpenKeys, hamburgerHidden }) => {
  const { bgColor = '' } = useQueryParams();
  const styles = useStyles({ hamburgerHidden });
  const footerStyles = useFooterStyles();
  React.useEffect(() => {
    if (document) {
      const main = document.querySelector('main');
      if (bgColor) {
        main.style.background = bgColor.length === 6 ? `#${bgColor}` : bgColor;
        main.style.boxShadow = 'inset 0 0 12px 0 rgba(0,0,0,0.12)';
      } else {
        main.style.background = 'unset';
        main.style.boxShadow = 'none';
      }
    }
  }, [bgColor]);
  return (
    <>
      <Header className={styles.header}>
        <Toolbar>
          <SidebarTrigger
            className={styles.trigger}
            sidebarId={'primarySidebar'}
          />
          <PageHeader />
        </Toolbar>
      </Header>
      <Content>{children}</Content>
      <DrawerSidebar sidebarId={'primarySidebar'}>
        <SidebarContent>
          <ComponentMenuList menus={menus} getOpenKeys={getOpenKeys} />
        </SidebarContent>
        <CollapseBtn />
      </DrawerSidebar>
      <Footer className={footerStyles.root}>
        <PageFooter />
      </Footer>
    </>
  );
};

PageLayout.propTypes = {
  menus: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
  children: PropTypes.node.isRequired,
  getOpenKeys: PropTypes.func,
  hamburgerHidden: PropTypes.bool,
};
PageLayout.defaultProps = {
  getOpenKeys: () => [],
  hamburgerHidden: false,
};

export default PageLayout;
