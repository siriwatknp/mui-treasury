import React from 'react';
import PropTypes from 'prop-types';
import KeyboardArrowRightRounded from '@material-ui/icons/KeyboardArrowRightRounded';
import KeyboardArrowLeftRounded from '@material-ui/icons/KeyboardArrowLeftRounded';
import { useLayoutCtx } from '../hooks';

const CollapseIcon = ({ mapContext, ...props }) => {
  const ctx = useLayoutCtx();
  const { collapsed, sidebar } = mapContext(ctx);
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

CollapseIcon.propTypes = {
  mapContext: PropTypes.func,
};
CollapseIcon.defaultProps = {
  mapContext: ctx => ctx,
};

export default CollapseIcon;
