import React from 'react';
import FaceGroup from '@mui-treasury/components/group/face';

const FaceGroupDemo = () => (
  <FaceGroup
    faces={[
      'https://i.pravatar.cc/300?img=1',
      'https://i.pravatar.cc/300?img=2',
      'https://i.pravatar.cc/300?img=3',
      'https://i.pravatar.cc/300?img=4',
    ]}
    size={48}
    offset={-8}
  />
);

FaceGroupDemo.propTypes = {};
FaceGroupDemo.defaultProps = {};

// hide-start
FaceGroupDemo.metadata = {
  title: 'Face',
  path: 'group/face',
  creators: [require('constants/creators').siriwatknp],
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
