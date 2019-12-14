import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useHeightAdjustment } from '../../hooks';
import * as styles from '../../styles';

const useTransitionStyles = makeStyles(styles.transitionStyles);
const useInsetSidebarStyles = makeStyles(styles.insetSidebarStyles);

const SharedInsetSidebar = ({
  className,
  style,
  children,
  useSidebarConfig,
  PaperProps = {},
  ...props
}) => {
  const {
    getInsetSidebarStyle,
    getInsetSidebarBodyStyle,
    ...parsedCtx
  } = useSidebarConfig();
  const height = useHeightAdjustment(parsedCtx);
  const transition = useTransitionStyles();
  const insetStyles = useInsetSidebarStyles();
  return (
    <div
      className={cx('InsetSidebar-root', insetStyles.root, className)}
      style={{ ...style, ...getInsetSidebarStyle() }}
      {...props}
    >
      <div
        {...PaperProps}
        style={{ ...PaperProps.style, ...getInsetSidebarBodyStyle() }}
        className={cx('InsetSidebar-paper', PaperProps.className)}
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
};
SharedInsetSidebar.defaultProps = {
  className: undefined,
  style: undefined,
  children: null,
  PaperProps: {
    className: undefined,
    style: undefined,
  },
};

export default SharedInsetSidebar;
