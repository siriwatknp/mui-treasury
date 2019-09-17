import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import FrontMatter from 'containers/FrontMatter';
import { Consumer } from './context';

const DemoSourceDrawer = () => (
  <Consumer>
    {({ metadata, setMetadata }) => {
      const isOpen = Object.keys(metadata).length > 0;
      return (
        <Drawer
          open={isOpen}
          anchor={'right'}
          variant={'temporary'}
          onClose={() => setMetadata({})}
        >
          <Box mt={3} px={3}>
            <h2>{metadata.title}</h2>
          </Box>
          <Box minWidth={{ xs: 256, sm: 500, md: 700 }}>
            <FrontMatter match={metadata.path}>
              {({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />}
            </FrontMatter>
          </Box>
        </Drawer>
      );
    }}
  </Consumer>
);

export default DemoSourceDrawer;
