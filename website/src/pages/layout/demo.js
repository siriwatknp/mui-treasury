/* eslint-disable */
import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {
  Root,
  Header,
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
import ContentForm from 'components/mock/ContentForm';
import FooterEx from 'components/mock/FooterEx';

const presets = {
  createDefaultLayout: defaultLayoutPreset,
  createStandardLayout: standardLayoutPreset,
  createFixedLayout: fixedLayoutPreset,
  createContentBasedLayout: contentBasedLayoutPreset,
  createCozyLayout: cozyLayoutPreset,
  createMuiTreasuryLayout: muiTreasuryPreset,
};

const index = () => {
  const [preset, setPreset] = useState('createStandardLayout');
  const [data, setData] = useState({
    header: true,
    nav: true,
    content: true,
    footer: true,
  });
  const sidebarStyles = useSidebarStyles();
  const headerStyles = useHeaderStyles();
  return (
    <Root config={presets[preset]}>
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
          {data.header && <HeaderEx />}
        </Toolbar>
      </Header>
      <Content>
        <ContentForm
          preset={preset}
          onChangePreset={val => {
            setPreset(val);
          }}
          data={data}
          onChangeData={setData}
        />
        {data.content && <ContentEx />}
      </Content>
      <Sidebar>
        {({ collapsed }) => (
          <>
            <NavHeaderEx collapsed={collapsed} />
            <div className={sidebarStyles.container}>
              {data.nav && <NavContentEx />}
            </div>
            <CollapseBtn className={sidebarStyles.collapseBtn}>
              <CollapseIcon />
            </CollapseBtn>
          </>
        )}
      </Sidebar>
      <Footer>{data.footer && <FooterEx />}</Footer>
    </Root>
  );
};

index.propTypes = {};
index.defaultProps = {};

export default index;
