import React from 'react';
import Box from '@material-ui/core/Box';

const SimpleShowcase = props => (
  <Box
    px={2}
    py={3}
    mx={{ xs: -2 }}
    align="center"
    bgcolor="grey.100"
    mb={3}
    {...props}
  />
);

export const Inline = props => (
  <Box display="inline-block" align="left" {...props} />
);

SimpleShowcase.Inline = Inline;

export default SimpleShowcase;
