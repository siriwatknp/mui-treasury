import React from 'react';
import FaceGroup  from '@mui-treasury/components/group/face';
import MOCK from 'constants/mock';

const FaceGroupDemo = () => (
  <FaceGroup faces={MOCK.facesX4} size={48} offset={-8} />
);

FaceGroupDemo.propTypes = {};
FaceGroupDemo.defaultProps = {};

// hide-start
FaceGroupDemo.metadata = {
  title: 'Face',
  path: 'group/face',
  files: [
    {
      pkg: 'mui-components',
      path: 'group/Faces.js',
    },
    {
      pkg: 'mui-styles',
      path: 'group/faceGroup.styles.js',
    },
  ],
  relates: [],
};
// hide-end

export default FaceGroupDemo;
