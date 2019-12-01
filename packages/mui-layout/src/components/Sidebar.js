import React from 'react';
import cx from 'clsx';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import { useLayoutCtx, useAutoCollapse, useHeightAdjustment } from '../hooks';
import { useTransitionStyles, useSidebarStyles } from '../styles';

const getSidebarAnchor = side => {
  if (!side) return 'left';
  return side;
};

const defaultMapContext = ({ header = {}, ...rest } = {}) => ({
  ...rest,
  clipped: header.clipped,
});

const Sidebar = ({
  children,
  PaperProps,
  SlideProps,
  // eslint-disable-next-line react/prop-types
  mapContext = defaultMapContext, // for internal usage only
  ...props
}) => {
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
  const { sidebar, opened, setOpened, getSidebarWidth } = parsedCtx;
  const isPermanent = sidebar.variant === 'permanent';
  if (typeof window === 'undefined') {
    return null;
  }
  return (
    <>
      <Drawer
        {...props}
        open={opened}
        onClose={() => {
          setOpened(false);
        }}
        variant={sidebar.variant}
        anchor={getSidebarAnchor(sidebar.anchor)}
        PaperProps={{
          ...PaperProps,
          classes: {
            // root: cx(
            //   styles.paper,
            //   isPermanent && transitionStyles.root,
            //   entered && transitionStyles.all
            // ),
          },
          style: {
            ...PaperProps.style,
            width: getSidebarWidth(),
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
    </>
  );
};

Sidebar.propTypes = {
  PaperProps: PropTypes.shape({}),
  SlideProps: PropTypes.shape({}),
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
};
Sidebar.defaultProps = {
  PaperProps: {},
  SlideProps: {},
  children: null,
};

export default Sidebar;
