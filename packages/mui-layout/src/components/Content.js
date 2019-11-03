import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx } from '../layoutContext';

const useStyles = makeStyles(({ transitions }) => ({
  root: {
    flexGrow: 1,
    transition: transitions.create(['margin', 'width'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
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
  const classes = useStyles(props);
  return (
    <>
      <Component
        {...props}
        className={`${classes.root} ${className}`}
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
