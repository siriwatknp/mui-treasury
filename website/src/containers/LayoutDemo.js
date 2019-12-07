import React from 'react';
import PropTypes from 'prop-types';
import { WindowProvider } from '@mui-treasury/layout';

import BrowserIFrame from 'components/layout/BrowserIFrame';
import SourceFileDrawer from 'containers/SourceFileDrawer';

const LayoutDemo = ({ Demo }) => {
  return (
    <>
      <BrowserIFrame>
        {({ window, container }) => {
          return (
            <WindowProvider value={{ iWindow: window, iBody: container }}>
              <Demo />
            </WindowProvider>
          );
        }}
      </BrowserIFrame>
      <SourceFileDrawer source={Demo.raw_js} metadata={Demo.metadata} />
    </>
  );
};

LayoutDemo.propTypes = {
  Demo: PropTypes.elementType.isRequired,
};

export default LayoutDemo;
