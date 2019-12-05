import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import StayCurrentPortrait from '@material-ui/icons/StayCurrentPortrait';
import StayCurrentLandscape from '@material-ui/icons/StayCurrentLandscape';
import Tablet from '@material-ui/icons/Tablet';
import TabletAndroid from '@material-ui/icons/TabletAndroid';
import LaptopMac from '@material-ui/icons/LaptopMac';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import Browser from './Browser';
import IFrame from './IFrame';

const devices = [
  {
    name: 'mobile',
    icon: <StayCurrentPortrait />,
    width: 375,
    height: 628,
    screen: 'xs',
  },
  {
    name: 'mobile horizontal',
    icon: <StayCurrentLandscape />,
    width: 600,
    height: 375,
    screen: 'sm',
  },
  {
    name: 'tablet',
    icon: <TabletAndroid />,
    width: 768,
    height: 1024,
    screen: 'sm',
  },
  {
    name: 'tablet horizontal',
    icon: <Tablet />,
    width: 1024,
    height: 768,
    screen: 'md',
  },
  {
    name: 'laptop',
    icon: <LaptopMac />,
    width: 1360,
    height: 900,
    screen: 'lg',
  },
];

const BrowserIFrame = ({ children }) => {
  const [current, setCurrent] = React.useState(devices[devices.length - 1]);
  const gutterBorderStyles = useGutterBorderedGridStyles();
  return (
    <Box px={{ xs: 2, sm: 3, md: 4 }} pb={{ xs: 2, sm: 5, md: 10 }}>
      <Box pt={2}>
        <Grid container justify={'center'}>
          {devices.map(item => (
            <Grid key={item.name} item classes={gutterBorderStyles}>
              <Box px={1}>
                <IconButton
                  color={item.name === current.name ? 'secondary' : 'default'}
                  onClick={() => setCurrent(item)}
                >
                  {item.icon}
                </IconButton>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box py={1} textAlign={'center'}>
        <Box
          fontSize={12}
          borderRadius={20}
          color={'grey.700'}
          bgcolor={'grey.200'}
          display={'inline-block'}
          px={1.5}
          py={0.5}
        >
          {current.width} x {current.height} -- screen: <b>{current.screen}</b>
        </Box>
      </Box>
      <Browser
        boxShadow={'0 2px 16px -4px rgba(0,0,0,0.12)'}
        width={current.width}
        height={current.height}
        margin={'auto'}
      >
        <IFrame style={{ height: 'calc(100% - 30px)' }}>{children}</IFrame>
      </Browser>
    </Box>
  );
};

export default BrowserIFrame;
