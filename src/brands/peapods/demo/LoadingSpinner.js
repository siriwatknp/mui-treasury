import React from 'react';
import PeaLoadingSpinner from '../lib/PeaLoadingSpinner';

const LoadingSpinner = () => <PeaLoadingSpinner />;

LoadingSpinner.metadata = {
  name: 'Pea Loading Spinner',
};
LoadingSpinner.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
LoadingSpinner.code = `
  import PeaLoadingSpinner from '../lib/PeaLoadingSpinner';
  
  const Preview = () => (
    <PeaLoadingSpinner />
  )
`;

export default LoadingSpinner;
