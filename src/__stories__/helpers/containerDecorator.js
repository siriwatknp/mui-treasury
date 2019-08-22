import React from 'react';
import Container from '@material-ui/core/Container';

export default props => storyFn => (
  <Container {...props}>{storyFn()}</Container>
);
