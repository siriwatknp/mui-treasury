import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import HeaderMagnet from './HeaderMagnet';
import { useLayoutCtx, useAutoCollapse } from '../hooks';
import { useTransitionStyles, useSecondarySidebarStyles } from '../styles';

const getSecondarySidebarConfig = (ctx, side) => {
  if (!side) {
    return ctx.sidebar;
  }
  return ctx.secondarySidebar;
};
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
  useAutoCollapse({
    ...ctx,
    autoCollapseDisabled: ctx.secondaryAutoCollapsedDisabled,
    collapsedBreakpoint: ctx.secondaryCollapsedBreakpoint,
    setCollapsed: ctx.setSecondaryCollapsed,
  });
  const [entered, setEntered] = React.useState(false);
  const styles = useSecondarySidebarStyles();
  const transitionStyles = useTransitionStyles();
  const { secondaryOpened, setSecondaryOpened, getSecondarySidebarWidth } = ctx;
  const sidebar = getSecondarySidebarConfig(ctx, side);
  console.log('sidebar', sidebar);
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
      <HeaderMagnet />
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
