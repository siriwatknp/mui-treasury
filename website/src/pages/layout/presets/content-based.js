import React from 'react';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';
import ContentBasedLayout from 'docs/layout/presets/contentBased';

const ContentBasedLayoutDemo = () => {
  return (
    <>
      <BrowserIFrame>
        {({ window, container }) => {
          return (
            <WindowProvider value={{ iWindow: window, iBody: container }}>
              <ContentBasedLayout />
            </WindowProvider>
          );
        }}
      </BrowserIFrame>
      <SourceFileDrawer
        source={ContentBasedLayout.raw_js}
        metadata={ContentBasedLayout.metadata}
      />
    </>
  );
};

export default ContentBasedLayoutDemo;
