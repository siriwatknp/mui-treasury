import React from 'react';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';
import ContentBasedLayout from 'docs/layout/presets/contentBased/ContentBasedLayout';

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
      <SourceFileDrawer metadata={ContentBasedLayout.metadata} />
    </>
  );
};

export default ContentBasedLayoutDemo;
