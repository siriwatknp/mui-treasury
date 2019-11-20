import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { useLayoutCtx, useAutoCollapse, useHeightAdjustment } from '../hooks';
import { useTransitionStyles, useSecondarySidebarStyles } from '../styles';

const getSecondarySidebarAnchor = side => {
  if (!side) return 'left';
  return side;
};

const SecondarySidebar = ({
  side,
  children,
  PaperProps,
  SlideProps,
  ...props
}) => {
  const ctx = useLayoutCtx();
  const height = useHeightAdjustment({
    sidebar: ctx.secondarySidebar,
    header: ctx.header,
    heightAdjustmentDisabled: ctx.secondaryHeightAdjustmentDisabled,
    heightAdjustmentSpeed: ctx.secondaryHeightAdjustmentSpeed,
  });
  useAutoCollapse({
    ...ctx,
    autoCollapseDisabled: ctx.secondaryAutoCollapsedDisabled,
    collapsedBreakpoint: ctx.secondaryCollapsedBreakpoint,
    setCollapsed: ctx.setSecondaryCollapsed,
  });
  const [entered, setEntered] = React.useState(false);
  const styles = useSecondarySidebarStyles();
  const transitionStyles = useTransitionStyles();
  const {
    secondarySidebar: sidebar,
    secondaryOpened,
    setSecondaryOpened,
    getSecondarySidebarWidth,
  } = ctx;
  const isPermanent = sidebar.variant === 'permanent';
  return (
    <Drawer
      {...props}
      open={secondaryOpened}
      onClose={() => {
        setSecondaryOpened(false);
      }}
      variant={sidebar.variant}
      anchor={getSecondarySidebarAnchor(sidebar.anchor)}
      PaperProps={{
        ...PaperProps,
        classes: {
          root: cx(
            styles.paper,
            isPermanent && transitionStyles.root,
            entered && transitionStyles.all
          ),
        },
        style: {
          ...PaperProps.style,
          width: getSecondarySidebarWidth(),
        },
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

SecondarySidebar.propTypes = {
  side: PropTypes.oneOf(['left', 'right']),
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
SecondarySidebar.defaultProps = {
  side: undefined,
  PaperProps: {},
  SlideProps: {},
  children: null,
};

export default SecondarySidebar;
