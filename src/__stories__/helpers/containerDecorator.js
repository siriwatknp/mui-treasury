import React from 'react';
import Container from '@material-ui/core/Container';

export const StylesProvider = ({ useStyles, children }) => {
  const styles = useStyles();
  return children(styles);
};

export default props => storyFn => (
  <Container {...props}>{storyFn()}</Container>
);
