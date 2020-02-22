import React from 'react';
import { SliderPicker } from 'react-color';
import Box from '@material-ui/core/Box';
import { useNeumorphShadowStyles } from '@mui-treasury/styles/shadow/neumorph';

const NeumorphShadow = () => {
  const [bgColor, setBgColor] = React.useState('#B3D2E6');
  const classes = useNeumorphShadowStyles({ bgColor });
  return (
    <>
      <Box
        p={5}
        bgcolor={bgColor}
        width={'100%'}
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        flex={1}
      >
        <Box classes={classes} borderRadius={16} width={240} height={160} />
      </Box>
      <Box width={'100%'}>
        <SliderPicker
          color={bgColor}
          onChange={color => setBgColor(color.hex)}
        />
      </Box>
    </>
  );
};
// hide-start
NeumorphShadow.metadata = {
  title: 'Neumorph',
  path: 'shadow/neumorph',
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Sat Feb 22 2020',
  frameProps: { p: 0, flexDirection: 'column' },
};
// hide-end

export default NeumorphShadow;
