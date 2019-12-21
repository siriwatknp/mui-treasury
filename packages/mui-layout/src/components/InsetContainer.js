import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx } from '../hooks';
import createContainer from '../models/container';
import * as styles from '../styles';

const useTransitionStyles = makeStyles(styles.transitionStyles);
const useContainerStyles = makeStyles(styles.containerStyles);

const InsetContainer = ({
  component: Component,
  className,
  style,
  ...props
}) => {
  const ctx = useLayoutCtx();
  const containerModel = createContainer(ctx);
  const transition = useTransitionStyles();
  const containerStyles = useContainerStyles();
  return (
    <Component
      {...props}
      className={cx(containerStyles.root, transition.root, className)}
      style={{ ...style, ...containerModel.getStyle() }}
    />
  );
};

InsetContainer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
  component: PropTypes.elementType,
};
InsetContainer.defaultProps = {
  className: undefined,
  style: undefined,
  component: 'div',
};

export default InsetContainer;
