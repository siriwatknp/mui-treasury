import React from 'react';
import cx from 'clsx';
import get from 'lodash.get';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { useAutoCollapse, useHeightAdjustment, useWindow } from '../../hooks';
import { transitionStyles, sidebarStyles } from '../../styles';
import createEdgeSidebar from '../../models/edgeSidebar';

const useSidebarStyles = makeStyles(sidebarStyles);
const useTransitionStyles = makeStyles(transitionStyles);

const SharedSidebar = ({
  children,
  PaperProps,
  SlideProps,
  ModalProps,
  useSidebarConfig,
  ...props
}) => {
  const { iBody } = useWindow();
  const theme = useTheme();
  const parsedCtx = useSidebarConfig();
  const height = useHeightAdjustment(parsedCtx);
  useAutoCollapse(parsedCtx);
  const [entered, setEntered] = React.useState(false);
  const styles = useSidebarStyles();
  const transition = useTransitionStyles();
  const { sidebar, opened, setOpened, getSidebarZIndex } = parsedCtx;
  const { getWidth } = createEdgeSidebar(parsedCtx);
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
            isPermanent && transition.root,
            entered && transition.all,
            get(PaperProps, 'classes.root')
          ),
        },
        style: {
          ...get(PaperProps, 'style'),
          ...getSidebarZIndex(theme),
          width: getWidth(),
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
        className={cx('HeaderMagnet', transition.smooth)}
        style={{ height, flexShrink: 0 }}
      />
      {typeof children === 'function' ? children(parsedCtx) : children}
    </Drawer>
  );
};

SharedSidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  ModalProps: PropTypes.shape({}),
  useSidebarConfig: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
SharedSidebar.defaultProps = {
  PaperProps: undefined,
  SlideProps: undefined,
  ModalProps: undefined,
  children: null,
};

export default SharedSidebar;
