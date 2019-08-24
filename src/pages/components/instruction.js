import React from 'react';
import PropTypes from 'prop-types';
import SidebarLayout from 'components/layout/SidebarLayout';
import { PKG } from 'constants/menus';

const ComponentInstruction = () => (
  <SidebarLayout
    pkg={PKG.components}
    getOpenKeys={menus => menus.map(({ key }) => key)}
  >
    <h1>Instruction</h1>
  </SidebarLayout>
);

ComponentInstruction.propTypes = {};
ComponentInstruction.defaultProps = {};

export default ComponentInstruction;
