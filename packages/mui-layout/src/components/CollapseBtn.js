import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { useConfig } from '../layoutContext';

const CollapseBtn = ({ onClick, ...props }) => {
  const { setCollapsed, collapsed } = useConfig();
  return (
    <Button
      onClick={e => {
        onClick(e);
        setCollapsed(!collapsed);
      }}
      {...props}
    />
  );
};

CollapseBtn.propTypes = {
  onClick: PropTypes.func,
};
CollapseBtn.defaultProps = {
  onClick: () => {},
};

export default CollapseBtn;
