import React from 'react';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';
import FixedLayout from 'docs/layout/presets/fixed';

const FixedLayoutDemo = () => {
  return (
    <>
      <BrowserIFrame>
        {({ window, container }) => {
          return (
            <WindowProvider value={{ iWindow: window, iBody: container }}>
              <FixedLayout />
            </WindowProvider>
          );
        }}
      </BrowserIFrame>
      <SourceFileDrawer
        source={FixedLayout.raw_js}
        metadata={FixedLayout.metadata}
      />
    </>
  );
};

export default FixedLayoutDemo;
