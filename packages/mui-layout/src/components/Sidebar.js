import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@material-ui/core/Drawer';
import { useLayoutCtx } from '../layoutContext';
import { sidebarStyles } from '../styles';
import useAutoCollapse from '../hooks/useAutoCollapse';

const useStyles = makeStyles(sidebarStyles);

const Sidebar = ({ children, PaperProps, ...props }) => {
  useAutoCollapse();
  const styles = useStyles();
  const ctx = useLayoutCtx();
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
          root: cx(styles.paper, styles.transition),
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
