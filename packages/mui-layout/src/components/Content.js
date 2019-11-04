import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useTransitionStyles } from '../styles';
import { useLayoutCtx } from '../layoutContext';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Content = ({
  component: Component,
  className,
  children,
  style,
  ...props
}) => {
  const ctx = useLayoutCtx();
  const { getSidebarGap, getWidth, content } = ctx;
  const styles = useStyles(props);
  const transitionStyles = useTransitionStyles();
  return (
    <>
      <Component
        {...props}
        className={cx(styles.root, transitionStyles.root, className)}
        style={{
          ...style,
          marginLeft: getSidebarGap(content),
          width: getWidth(content),
        }}
      >
        {typeof children === 'function' ? children(ctx) : children}
      </Component>
    </>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
};
Content.defaultProps = {
  className: undefined,
  component: 'main',
  style: undefined,
};

export default Content;
