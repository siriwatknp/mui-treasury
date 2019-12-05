/* eslint-disable */
import React, { useState } from 'react';
import { ThemeWrapper } from 'utils/theme';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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
import BrowserIFrame from 'components/layout/BrowserIFrame';

const presets = {
  createDefaultLayout: defaultLayoutPreset,
  createStandardLayout: standardLayoutPreset,
  createFixedLayout: fixedLayoutPreset,
  createContentBasedLayout: contentBasedLayoutPreset,
  createCozyLayout: cozyLayoutPreset,
  createMuiTreasuryLayout: muiTreasuryPreset,
};

const Demo = () => {
  return (
    <BrowserIFrame>
      <ThemeWrapper>
        <CssBaseline />
        <Button>Hello</Button>
      </ThemeWrapper>
    </BrowserIFrame>
  );
};

Demo.propTypes = {};
Demo.defaultProps = {};

export default Demo;
