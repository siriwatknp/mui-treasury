import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Header,
  SidebarTrigger,
  SidebarTriggerIcon,
  CollapseBtn,
  CollapseIcon,
  Content,
  Footer,
  Sidebar,
  sidebarStyles,
  headerStyles,
} from '@mui-treasury/layout';
import Toolbar from '@material-ui/core/Toolbar';
import PageHeader from 'components/layout/PageHeader';
import PageFooter from 'components/layout/PageFooter';
import ComponentMenuList from 'components/organisms/ComponentMenuList';

const useStyles = makeStyles(theme => {
  const { palette } = theme;
  return {
    header: {
      backgroundColor: palette.common.white,
      borderBottom: `1px solid ${palette.divider}`,
    },
  };
});

const useFooterStyles = makeStyles(() => ({
  root: {
    padding: 0,
  },
}));

const useSidebarStyles = makeStyles(sidebarStyles);
const useHeaderStyles = makeStyles(headerStyles);

const PageLayout = ({ menus, children, getOpenKeys }) => {
  const styles = useStyles();
  const headStyles = useHeaderStyles();
  const sbStyles = useSidebarStyles();
  const footerStyles = useFooterStyles();
  return (
    <>
      <Header className={styles.header}>
        <Toolbar>
          <SidebarTrigger className={headStyles.leftTrigger}>
            <SidebarTriggerIcon />
          </SidebarTrigger>
          <PageHeader />
        </Toolbar>
      </Header>
      <Content>{children}</Content>
      <Sidebar>
        <div className={sbStyles.container}>
          <ComponentMenuList menus={menus} getOpenKeys={getOpenKeys} />
        </div>
        <CollapseBtn className={sbStyles.collapseBtn}>
          <CollapseIcon />
        </CollapseBtn>
      </Sidebar>
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
};
PageLayout.defaultProps = {
  getOpenKeys: () => [],
};

export default PageLayout;
