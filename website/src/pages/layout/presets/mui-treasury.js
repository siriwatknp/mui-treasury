import React from 'react';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';
import MuiTreasuryLayout from 'docs/layout/presets/muiTreasury';

const MuiTreasuryLayoutDemo = () => {
  return (
    <>
      <BrowserIFrame>
        {({ window, container }) => {
          return (
            <WindowProvider value={{ iWindow: window, iBody: container }}>
              <MuiTreasuryLayout />
            </WindowProvider>
          );
        }}
      </BrowserIFrame>
      <SourceFileDrawer
        metadata={MuiTreasuryLayout.metadata}
        source={MuiTreasuryLayout.raw_js}
      />
    </>
  );
};

export default MuiTreasuryLayoutDemo;
