import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import makeStyles from '@material-ui/styles/makeStyles';

const getRotationDegree = ({ rotation, degree }) => {
  switch (rotation) {
    case 'cw':
      return 1 * degree;
    case 'ccw':
      return -1 * degree;
    default:
      return 0;
  }
};

const useStyles = makeStyles(({ transitions }) => ({
  root: {
    transition: transitions.create(),
  },
  rotated: ({ rotation, degree }) => ({
    transform: `rotate(${getRotationDegree({ rotation, degree })}deg)`,
  }),
}));

const RotateToggle = ({
  component: Component,
  className,
  expanded,
  rotation,
  degree,
  ...props
}) => {
  const styles = useStyles({ rotation, degree });
  return (
    <Component
      className={cx(styles.root, expanded && styles.rotated, className)}
      {...props}
    />
  );
};

RotateToggle.propTypes = {
  component: PropTypes.elementType.isRequired,
  className: PropTypes.string,
  expanded: PropTypes.bool,
  rotation: PropTypes.oneOf(['cw', 'ccw']),
  degree: PropTypes.number,
};
RotateToggle.defaultProps = {
  className: undefined,
  expanded: false,
  rotation: 'ccw',
  degree: 90,
};

export default RotateToggle;
