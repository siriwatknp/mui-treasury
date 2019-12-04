import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { useFaceGroupStyles } from '@mui-treasury/styles/group/face';

const FaceGroup = ({ faces, offset, size }) => {
  const styles = useFaceGroupStyles({ offset, size });
  return faces.map(face => (
    <Avatar className={styles.item} key={face} src={face} />
  ));
};

FaceGroup.propTypes = {
  faces: PropTypes.arrayOf(PropTypes.string),
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
FaceGroup.defaultProps = {
  offset: undefined, // spacing unit
  size: undefined, // spacing unit
};

export default FaceGroup;
