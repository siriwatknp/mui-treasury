import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { transitionStyles } from '../styles';
import { useLayoutCtx } from '../hooks';
import createContent from '../models/content';
import HeaderOffset from './HeaderOffset';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const useTransitionStyles = makeStyles(transitionStyles);

const Content = ({
  component: Component,
  className,
  children,
  style,
  omitHeaderOffset,
  ...props
}) => {
  const ctx = useLayoutCtx();
  const contentModel = createContent(ctx);
  const styles = useStyles(props);
  const transition = useTransitionStyles();
  return (
    <Component
      {...props}
      className={cx(styles.root, transition.root, className)}
      style={{ ...style, ...contentModel.getStyle() }}
    >
      {!omitHeaderOffset && <HeaderOffset />}
      {children}
    </Component>
  );
};

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  component: PropTypes.elementType,
  style: PropTypes.shape({}),
  omitHeaderOffset: PropTypes.bool,
};
Content.defaultProps = {
  className: undefined,
  component: 'main',
  style: undefined,
  omitHeaderOffset: false,
};

export default Content;
