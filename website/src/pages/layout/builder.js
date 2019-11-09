import React from 'react';
import SidebarLayout from 'components/layout/SidebarLayout';
import LayoutBuilder from '../../__temporary__/LayoutBuilderPage';
import { PKG } from '../../constants/menus';

const BuilderPage = () => {
  return (
    <SidebarLayout pkg={PKG.layouts}>
      <LayoutBuilder />
    </SidebarLayout>
  );
};

export default BuilderPage;
