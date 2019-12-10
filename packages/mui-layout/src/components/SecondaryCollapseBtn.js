import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CollapseBtn from './CollapseBtn';
import SidebarAdapter from '../adapters/sidebar';

const SecondaryCollapseBtn = props => (
  <CollapseBtn {...props} mapContext={SidebarAdapter.mapSecondaryConfig} />
);

SecondaryCollapseBtn.propTypes = {
  onClick: PropTypes.func,
  component: PropTypes.elementType,
};
SecondaryCollapseBtn.defaultProps = {
  onClick: () => {},
  component: Button,
};

export default SecondaryCollapseBtn;
