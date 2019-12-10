import React from 'react';
import cx from 'clsx';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import {
  useLayoutCtx,
  useAutoCollapse,
  useHeightAdjustment,
  useWindow,
} from '../hooks';
import { useTransitionStyles, useSidebarStyles } from '../styles';

const defaultMapContext = ({ header = {}, ...rest } = {}) => ({
  ...rest,
  clipped: header.clipped,
});

const Sidebar = ({
  children,
  PaperProps,
  SlideProps,
  ModalProps,
  // eslint-disable-next-line react/prop-types
  mapContext = defaultMapContext, // for internal usage only
  ...props
}) => {
  const { iBody } = useWindow();
  const theme = useTheme();
  const ctx = useLayoutCtx();
  const parsedCtx = mapContext(ctx);
  const height = useHeightAdjustment({
    ...parsedCtx,
    header: ctx.header,
    heightAdjustmentDisabled: ctx.heightAdjustmentDisabled,
    heightAdjustmentSpeed: ctx.heightAdjustmentSpeed,
  });
  useAutoCollapse(parsedCtx);
  const [entered, setEntered] = React.useState(false);
  const styles = useSidebarStyles();
  const transitionStyles = useTransitionStyles();
  const {
    sidebar,
    opened,
    setOpened,
    getSidebarWidth,
    getSidebarZIndex,
  } = parsedCtx;
  const isPermanent = sidebar.variant === 'permanent';
  return (
    <Drawer
      {...props}
      open={opened}
      onClose={() => {
        setOpened(false);
      }}
      variant={sidebar.variant}
      anchor={sidebar.anchor || 'left'}
      PaperProps={{
        ...PaperProps,
        classes: {
          ...get(PaperProps, 'classes'),
          root: cx(
            styles.paper,
            isPermanent && transitionStyles.root,
            entered && transitionStyles.all,
            get(PaperProps, 'classes.root')
          ),
        },
        style: {
          ...get(PaperProps, 'style'),
          ...getSidebarZIndex(theme),
          width: getSidebarWidth(),
        },
      }}
      ModalProps={{
        container: iBody,
        ...ModalProps,
      }}
      SlideProps={{
        ...SlideProps,
        onEntered: () => setEntered(true),
        onExit: () => setEntered(false),
      }}
    >
      <div
        className={cx('HeaderMagnet', transitionStyles.smooth)}
        style={{ height, flexShrink: 0 }}
      />
      {typeof children === 'function' ? children(ctx) : children}
    </Drawer>
  );
};

Sidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  ModalProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
Sidebar.defaultProps = {
  PaperProps: undefined,
  SlideProps: undefined,
  ModalProps: undefined,
  children: null,
};

export default Sidebar;
