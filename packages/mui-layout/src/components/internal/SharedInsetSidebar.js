import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';
import cx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import {
  useHeightAdjustment,
  useInsetBreakpoint,
  useWindow,
} from '../../hooks';
import createInsetSidebar from '../../models/insetSidebar';
import * as styles from '../../styles';

const useTransitionStyles = makeStyles(styles.transitionStyles);
const useInsetSidebarStyles = makeStyles(styles.insetSidebarStyles);

const SharedInsetSidebar = ({
  className,
  style,
  children,
  useSidebarConfig,
  PaperProps = {},
  ModalProps = {},
  ...props
}) => {
  const { iBody } = useWindow();
  const parsedCtx = useSidebarConfig();
  const { opened, setOpened } = parsedCtx;
  const {
    getWidth,
    getBodyStyle,
    getDrawerWidth,
    getDrawerAnchor,
  } = createInsetSidebar(parsedCtx);
  const { displayedBelowBreakpoint } = useInsetBreakpoint(parsedCtx);
  const height = useHeightAdjustment(parsedCtx);
  const transition = useTransitionStyles();
  const insetStyles = useInsetSidebarStyles();
  const { position: insetPosition } = get(parsedCtx, 'sidebar.insetProps', {});
  if (displayedBelowBreakpoint) {
    return (
      <Drawer
        {...props}
        open={opened}
        onClose={() => {
          setOpened(false);
        }}
        variant={'temporary'}
        anchor={getDrawerAnchor()}
        PaperProps={{
          ...PaperProps,
          style: {
            ...PaperProps.style,
            width: getDrawerWidth(),
          },
        }}
        ModalProps={{
          container: iBody,
          ...ModalProps,
        }}
      >
        {children}
      </Drawer>
    );
  }
  return (
    <div
      className={cx('InsetSidebar-root', insetStyles.root, className)}
      style={{ ...style, width: getWidth() }}
      {...props}
    >
      <div
        {...PaperProps}
        style={{ ...getBodyStyle(), ...PaperProps.style }}
        className={cx(
          'InsetSidebar-paper',
          insetPosition === 'sticky' && insetStyles.paperSticky,
          PaperProps.className
        )}
      >
        <div
          className={cx('HeaderMagnet', transition.smooth)}
          style={{ height, flexShrink: 0 }}
        />
        {children}
      </div>
    </div>
  );
};

SharedInsetSidebar.propTypes = {
  useSidebarConfig: PropTypes.func.isRequired,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  children: PropTypes.node,
  PaperProps: PropTypes.shape({
    className: PropTypes.string,
    style: PropTypes.shape({}),
  }),
  ModalProps: PropTypes.shape({}),
};
SharedInsetSidebar.defaultProps = {
  className: undefined,
  style: undefined,
  children: null,
  PaperProps: undefined,
  ModalProps: undefined,
};

export default SharedInsetSidebar;
