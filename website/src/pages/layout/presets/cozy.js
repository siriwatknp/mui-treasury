import React from 'react';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';
import CozyLayout from 'docs/layout/presets/cozy/CozyLayout';

const CozyLayoutDemo = () => {
  return (
    <>
      <BrowserIFrame>
        {({ window, container }) => {
          return (
            <WindowProvider value={{ iWindow: window, iBody: container }}>
              <CozyLayout />
            </WindowProvider>
          );
        }}
      </BrowserIFrame>
      <SourceFileDrawer metadata={CozyLayout.metadata} />
    </>
  );
};

export default CozyLayoutDemo;
