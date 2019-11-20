import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CollapseBtn from './CollapseBtn';
import { parseSecondaryConfig } from '../utils/sidebarUtils';

const SecondaryCollapseBtn = props => (
  <CollapseBtn {...props} mapContext={parseSecondaryConfig} />
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
