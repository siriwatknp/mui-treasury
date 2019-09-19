import React, { useState } from 'react';
import Container from '@material-ui/core/Container';

export const StylesProvider = ({ useStyles, children }) => {
  const styles = useStyles();
  const [count, setCount] = useState(0);
  return children(styles, { count, setCount });
};

export default props => storyFn => (
  <Container {...props}>{storyFn()}</Container>
);
