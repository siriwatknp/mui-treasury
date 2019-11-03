import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import { useConfig } from '../layoutContext';
import { sidebarStyles } from '../styles';

const useStyles = makeStyles(sidebarStyles);

const Sidebar = ({ children, PaperProps, ...props }) => {
  const styles = useStyles();
  const ctx = useConfig();
  const { sidebar, opened, setOpened, getSidebarWidth } = ctx;
  return (
    <Drawer
      {...props}
      open={opened}
      onClose={() => {
        setOpened(false);
      }}
      variant={sidebar.variant}
      PaperProps={{
        ...PaperProps,
        classes: {
          root: styles.paper,
        },
        style: {
          ...PaperProps.style,
          width: getSidebarWidth(),
        },
      }}
    >
      {typeof children === 'function' ? children(ctx) : children}
    </Drawer>
  );
};

Sidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
Sidebar.defaultProps = {
  PaperProps: {},
  children: null,
};

export default Sidebar;
