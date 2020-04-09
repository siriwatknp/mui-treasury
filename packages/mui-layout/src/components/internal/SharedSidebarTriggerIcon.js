import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';

const SharedSidebarTriggerIcon = ({ useSidebarConfig, ...props }) => {
  const { open, sidebar } = useSidebarConfig();
  const getArrow = () => {
    if (sidebar.anchor === 'left') {
      return <ArrowLeft {...props} />;
    }
    if (sidebar.anchor === 'right') {
      return <ArrowRight {...props} />;
    }
    return null;
  };
  return open ? getArrow() : <MenuRounded {...props} />;
};

SharedSidebarTriggerIcon.propTypes = {
  useSidebarConfig: PropTypes.func.isRequired,
};
SharedSidebarTriggerIcon.defaultProps = {};

export default SharedSidebarTriggerIcon;
