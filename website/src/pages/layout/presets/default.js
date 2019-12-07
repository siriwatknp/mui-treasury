import React from 'react';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';
import DefaultLayout from 'docs/layout/presets/default';

const DefaultLayoutDemo = () => {
  return (
    <>
      <BrowserIFrame>
        {({ window, container }) => {
          return (
            <WindowProvider value={{ iWindow: window, iBody: container }}>
              <DefaultLayout />
            </WindowProvider>
          );
        }}
      </BrowserIFrame>
      <SourceFileDrawer
        source={DefaultLayout.raw_js}
        metadata={DefaultLayout.metadata}
      />
    </>
  );
};

export default DefaultLayoutDemo;
