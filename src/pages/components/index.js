import React from 'react';
import SidebarLayout from 'components/layout/SidebarLayout';
import { PKG } from 'constants/menus';

const ComponentPage = () => (
  <SidebarLayout pkg={PKG.components}>components</SidebarLayout>
);

ComponentPage.propTypes = {};
ComponentPage.defaultProps = {};

export default ComponentPage;
