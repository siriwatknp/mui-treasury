import React from 'react';
import { PKG } from 'constants/menus';
import Box from '@material-ui/core/Box';
import SidebarLayout from 'components/layout/SidebarLayout';
import ComponentHeading from '../ComponentHeading';
import DemoSourceDrawer from './DemoSourceDrawer';
import DemoComponents from './DemoComponents';
import MetadataContext from './context';

const DemoPage = ({ cssTree }) => (
  <SidebarLayout pkg={PKG.components} getOpenKeys={menus => menus[1].key}>
    <MetadataContext>
      <Box py={{ xs: '2rem', sm: '3rem', md: '4rem' }}>
        <ComponentHeading
          title={'Button'}
          description={'The most common component of any website'}
        />
      </Box>
      <DemoSourceDrawer />
      <DemoComponents cssTree={cssTree} />
    </MetadataContext>
  </SidebarLayout>
);

DemoPage.propTypes = {};
DemoPage.defaultProps = {};

export default DemoPage;
