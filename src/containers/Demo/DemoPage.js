import React from 'react';
import PropTypes from 'prop-types';
import { PKG } from 'constants/menus';
import SidebarLayout from 'components/layout/SidebarLayout';
import ComponentHeading from 'components/organisms/ComponentHeading';
import DemoSourceDrawer from './DemoSourceDrawer';
import DemoComponents from './DemoComponents';
import MetadataContext from './context';

const DemoPage = ({
  title,
  description,
  DemoComponentsProps,
  DemoSourceDrawerProps,
}) => (
  <SidebarLayout pkg={PKG.components} getOpenKeys={() => ['basic', 'complex']}>
    <MetadataContext>
      <ComponentHeading title={title} description={description} />
      <DemoSourceDrawer title={title} {...DemoSourceDrawerProps} />
      <DemoComponents {...DemoComponentsProps} />
    </MetadataContext>
  </SidebarLayout>
);

DemoPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  DemoComponentsProps: PropTypes.shape({}),
  DemoSourceDrawerProps: PropTypes.shape({}),
};
DemoPage.defaultProps = {
  description: '',
  DemoComponentsProps: {},
  DemoSourceDrawerProps: {},
};

export default DemoPage;
