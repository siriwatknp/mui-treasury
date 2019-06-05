import React from 'react';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import PeaSlider from '../lib/PeaSlider';

const Slider = () => (
  <Box width={'100%'}>
    <Box display={'flex'} justifyContent={'space-between'}>
      <FormLabel>Distance (in miles)</FormLabel>
      <Typography color={'textSecondary'}>5.7 miles</Typography>
    </Box>
    <PeaSlider />
  </Box>
);

Slider.metadata = {
  name: 'Pea Slider',
};
Slider.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Slider.code = `
  import React from 'react';
  import Box from '@material-ui/core/Box';
  import FormLabel from '@material-ui/core/FormLabel';
  import Typography from '@material-ui/core/Typography';
  import PeaSlider from '../lib/PeaSlider';
  
  const Preview = () => (
    <Box width={'100%'}>
      <Box display={'flex'} justifyContent={'space-between'}>
        <FormLabel>Distance (in miles)</FormLabel>
        <Typography color={'textSecondary'}>5.7 miles</Typography>
      </Box>
      <PeaSlider />
    </Box>
  )
`;

export default Slider;
