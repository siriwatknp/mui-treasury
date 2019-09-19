import React from 'react';
import PropTypes from 'prop-types';
import { PKG } from 'constants/menus';
import Box from '@material-ui/core/Box';
import SidebarLayout from 'components/layout/SidebarLayout';
import ComponentHeading from 'components/organisms/ComponentHeading';
import DemoSourceDrawer from './DemoSourceDrawer';
import DemoComponents from './DemoComponents';
import MetadataContext from './context';

const DemoPage = ({ title, description, DemoComponentsProps }) => (
  <SidebarLayout pkg={PKG.components} getOpenKeys={menus => menus[1].key}>
    <MetadataContext>
      <Box py={{ xs: '2rem', sm: '3rem', md: '4rem' }}>
        <ComponentHeading title={title} description={description} />
      </Box>
      <DemoSourceDrawer />
      <DemoComponents {...DemoComponentsProps} />
    </MetadataContext>
  </SidebarLayout>
);

DemoPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  DemoComponentsProps: PropTypes.shape({}),
};
DemoPage.defaultProps = {
  description: '',
  DemoComponentsProps: {},
};

export default DemoPage;
