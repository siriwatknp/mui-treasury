import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';

const SharedCollapseIcon = ({ useSidebarConfig, ...props }) => {
  const { collapsed, sidebar } = useSidebarConfig();
  const getCollapsedArrow = () => {
    if (sidebar.anchor === 'right') {
      return <KeyboardArrowLeftRounded {...props} />;
    }
    if (sidebar.anchor === 'left') {
      return <KeyboardArrowRightRounded {...props} />;
    }
    return null;
  };
  const getUnCollapsedArrow = () => {
    if (sidebar.anchor === 'left') {
      return <KeyboardArrowLeftRounded {...props} />;
    }
    if (sidebar.anchor === 'right') {
      return <KeyboardArrowRightRounded {...props} />;
    }
    return null;
  };
  return collapsed ? getCollapsedArrow() : getUnCollapsedArrow();
};

SharedCollapseIcon.propTypes = {
  useSidebarConfig: PropTypes.func.isRequired,
};
SharedCollapseIcon.defaultProps = {};

export default SharedCollapseIcon;
