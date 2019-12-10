import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SharedCollapseBtn from './internal/SharedCollapseBtn';
import use2ndSidebarConfig from '../hooks/use2ndSidebarConfig';

const SecondaryCollapseBtn = props => (
  <SharedCollapseBtn {...props} useSidebarConfig={use2ndSidebarConfig} />
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
