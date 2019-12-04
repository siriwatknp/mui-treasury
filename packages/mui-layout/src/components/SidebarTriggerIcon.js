import React from 'react';
import PropTypes from 'prop-types';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';
import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import MenuRounded from '@material-ui/icons/MenuRounded';
import { useLayoutCtx } from '../hooks';

const SidebarTriggerIcon = ({ mapContext, ...props }) => {
  const ctx = useLayoutCtx();
  const { opened, sidebar } = mapContext(ctx);
  const getArrow = () => {
    if (sidebar.anchor === 'left') {
      return <ArrowLeft {...props} />;
    }
    if (sidebar.anchor === 'right') {
      return <ArrowRight {...props} />;
    }
    return null;
  };
  return opened ? getArrow() : <MenuRounded {...props} />;
};

SidebarTriggerIcon.propTypes = {
  mapContext: PropTypes.func,
};
SidebarTriggerIcon.defaultProps = {
  mapContext: ctx => ctx,
};

export default SidebarTriggerIcon;
