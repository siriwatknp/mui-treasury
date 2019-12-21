import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import MuiContainer from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/styles';
import { useLayoutCtx } from '../hooks';
import * as styles from '../styles';

const useTransitionStyles = makeStyles(styles.transitionStyles);
const useContainerStyles = makeStyles(styles.containerStyles);

const Container = ({ className, style, ...props }) => {
  const ctx = useLayoutCtx();
  const { getContainerStyle } = ctx;
  const transition = useTransitionStyles();
  const containerStyles = useContainerStyles();
  return (
    <MuiContainer
      {...props}
      className={cx(containerStyles.root, transition.root, className)}
      style={{ ...style, ...getContainerStyle() }}
    />
  );
};

Container.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({}),
};
Container.defaultProps = {
  className: undefined,
  style: undefined,
};

export default Container;
