/* eslint-disable */
import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
  Root,
  Header,
  HeaderOffset,
  Sidebar,
  Content,
  Footer,
  CollapseBtn,
  CollapseIcon,
  SidebarTrigger,
  SidebarTriggerIcon,
  useSidebarStyles,
  useHeaderStyles,
} from '@mui-treasury/layout';
import {
  defaultLayoutPreset,
  standardLayoutPreset,
  fixedLayoutPreset,
  contentBasedLayoutPreset,
  cozyLayoutPreset,
  muiTreasuryPreset,
} from '@mui-treasury/layout/presets';
// MOCK
import NavContentEx from 'components/mock/NavContentEx';
import NavHeaderEx from 'components/mock/NavHeaderEx';
import HeaderEx from 'components/mock/HeaderEx';
import ContentEx from 'components/mock/ContentEx';
import FooterEx from 'components/mock/FooterEx';

const initialConfig = {
  autoCollapseDisabled: false,
  collapsedBreakpoint: 'md',
  xs: {
    sidebar: {
      variant: 'temporary',
      width: 320,
      collapsible: true,
      collapsedWidth: 256,
    },
    header: {
      position: 'relative',
      offsetHeight: 56,
    },
  },
  sm: {
    sidebar: {
      variant: 'persistent',
      width: 256,
      collapsible: true,
      collapsedWidth: 64,
    },
    header: {
      position: 'relative',
      clipped: true,
      offsetHeight: 64,
    },
  },
  md: {
    sidebar: {
      variant: 'permanent',
      width: 256,
      collapsible: true,
      collapsedWidth: 64,
    },
    header: {
      position: 'relative',
      clipped: true,
      persistentPushed: false,
      persistentScreenFit: true,
      offsetHeight: 64,
    },
    content: {
      persistentPushed: false,
      persistentScreenFit: true,
    },
    footer: {
      persistentPushed: true,
      persistentScreenFit: true,
    },
  },
};

const index = () => {
  const sidebarStyles = useSidebarStyles();
  const headerStyles = useHeaderStyles();
  return (
    <Root config={muiTreasuryPreset}>
      <Header>
        <Toolbar>
          <CollapseBtn
            component={IconButton}
            className={headerStyles.leftTrigger}
          >
            <CollapseIcon />
          </CollapseBtn>
          <SidebarTrigger className={headerStyles.leftTrigger}>
            <SidebarTriggerIcon />
          </SidebarTrigger>
          <HeaderEx />
        </Toolbar>
      </Header>
      <HeaderOffset />
      <Content>
        <ContentEx />
      </Content>
      <Sidebar>
        {({ collapsed }) => (
          <>
            <NavHeaderEx collapsed={collapsed} />
            <div className={sidebarStyles.container}>
              <NavContentEx />
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </>
        )}
      </Sidebar>
      <Footer>
        <FooterEx />
      </Footer>
    </Root>
  );
};

index.propTypes = {};
index.defaultProps = {};

export default index;
