import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import PeaSlider from '../lib/PeaSlider';

const Slider = () => {
  const [value, setVaule] = useState(60);

  return (
    <Box width={'100%'}>
      <Box display={'flex'} justifyContent={'space-between'} marginBottom={8}>
        <FormLabel>Distance (in miles)</FormLabel>
        <Typography color={'textSecondary'}>{value} miles</Typography>
      </Box>
      <PeaSlider
        min={10}
        max={120}
        value={value}
        onChange={(e, val) => setVaule(val)}
      />
    </Box>
  );
};

Slider.metadata = {
  name: 'Pea Slider',
};
Slider.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Slider.code = `
  import React, { useState } from 'react';
  import Box from '@material-ui/core/Box';
  import FormLabel from '@material-ui/core/FormLabel';
  import Typography from '@material-ui/core/Typography';
  import PeaSlider from '../lib/PeaSlider';

  const Slider = () => {
    const [value, setVaule] = useState(60);

    return (
      <Box width={'100%'}>
        <Box display={'flex'} justifyContent={'space-between'} marginBottom={8}>
          <FormLabel>Distance (in miles)</FormLabel>
          <Typography color={'textSecondary'}>{value} miles</Typography>
        </Box>
        <PeaSlider
          min={10}
          max={120}
          value={value}
          onChange={(e, val) => setVaule(val)}
        />
      </Box>
    );
  };
`;

export default Slider;
