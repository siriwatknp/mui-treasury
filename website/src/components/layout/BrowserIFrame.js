import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Color from 'color';
import dropRight from 'lodash/dropRight';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import makeStyles from '@material-ui/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import StayCurrentPortrait from '@material-ui/icons/StayCurrentPortrait';
import StayCurrentLandscape from '@material-ui/icons/StayCurrentLandscape';
import Tablet from '@material-ui/icons/Tablet';
import TabletAndroid from '@material-ui/icons/TabletAndroid';
import LaptopMac from '@material-ui/icons/LaptopMac';
import DesktopMac from '@material-ui/icons/DesktopMac';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import Browser from './Browser';
import IFrame from './IFrame';
import useQueryParams from '../../utils/useQueryParams';

const parseColor = color => (color.length === 6 ? `#${color}` : color);

const useStyles = makeStyles(() => ({
  btn: ({ dark, accent = '#555' }) => ({
    '&:hover': {
      backgroundColor: Color(parseColor(accent))
        .rotate(12)
        .fade(0.87)
        .toString(),
    },
    ...(dark && {
      color: 'rgba(255, 255, 255, 0.7)',
      '&:hover': {
        color: 'rgba(255, 255, 255, 0.87)',
        backgroundColor: 'rgba(255,255,255,0.2)',
      },
    }),
  }),
  activeBtn: ({ accent = '#007aac' }) => ({
    color: `${parseColor(accent)} !important`,
  }),
}));

const devices = [
  {
    key: 'xs',
    name: 'mobile',
    icon: <StayCurrentPortrait />,
    width: 375,
    height: 628,
    screen: 'xs',
  },
  {
    key: 'xs-h',
    name: 'mobile horizontal',
    icon: <StayCurrentLandscape />,
    width: 600,
    height: 375,
    screen: 'sm',
  },
  {
    key: 'sm',
    name: 'tablet',
    icon: <TabletAndroid />,
    width: 768,
    height: 1024,
    screen: 'sm',
  },
  {
    key: 'md',
    name: 'tablet horizontal',
    icon: <Tablet />,
    width: 1024,
    height: 768,
    screen: 'md',
  },
  {
    key: 'lg',
    name: 'laptop',
    icon: <LaptopMac />,
    width: 1360,
    height: 768,
    screen: 'lg',
  },
  {
    key: 'xl',
    name: 'monitor',
    icon: <DesktopMac />,
    width: 1680,
    height: 768,
    screen: 'xl',
  },
];

const BrowserIFrame = ({ children, includes, initialKey }) => {
  const { accent, dark } = useQueryParams();
  const isXs = useMediaQuery('(max-width: 767px)');
  const styles = useStyles({ dark, accent });
  const [current, setCurrent] = React.useState(
    devices.find(({ key }) => key === initialKey)
  );
  const gutterBorderStyles = useGutterBorderedGridStyles({
    height: '40%',
    borderColor: dark ? 'rgba(255, 255, 255, 0.3)' : '',
  });
  return (
    <Box
      pt={0.5}
      px={{ xs: 0, sm: 3, md: 4 }}
      pb={{ xs: 4, sm: 6, md: 10 }}
      overflow={'auto'}
    >
      <Grid container justify={'center'}>
        {(isXs ? dropRight(devices) : devices)
          .filter(({ key }) => includes.includes(key))
          .map(item => (
            <Grid key={item.name} item classes={gutterBorderStyles}>
              <Box px={1}>
                <IconButton
                  className={cx(
                    styles.btn,
                    item.name === current.name && styles.activeBtn
                  )}
                  onClick={() => setCurrent(item)}
                >
                  {item.icon}
                </IconButton>
              </Box>
            </Grid>
          ))}
      </Grid>
      <Box pb={1} textAlign={'center'}>
        <Box
          fontSize={12}
          borderRadius={20}
          color={'grey.700'}
          bgcolor={'grey.100'}
          display={'inline-block'}
          px={1.5}
          py={0.5}
          {...(dark && {
            color: '#fff',
            bgcolor: 'rgba(255,255,255,0.2)',
          })}
        >
          {current.width} x {current.height} -- screen: <b>{current.screen}</b>
        </Box>
      </Box>
      <Browser
        boxShadow={'0 10px 20px rgba(0,0,0,0.15), 0 3px 6px rgba(0,0,0,0.1)'}
        width={current.width}
        height={current.height}
        margin={'auto'}
      >
        <IFrame>{children}</IFrame>
      </Browser>
    </Box>
  );
};

BrowserIFrame.propTypes = {
  children: PropTypes.node.isRequired,
  includes: PropTypes.arrayOf(
    PropTypes.oneOf(['xs', 'xs-h', 'sm', 'md', 'lg', 'xl'])
  ),
  initialKey: PropTypes.oneOf(['xs', 'xs-h', 'sm', 'md', 'lg', 'xl']),
};
BrowserIFrame.defaultProps = {
  includes: ['xs', 'xs-h', 'sm', 'md', 'lg', 'xl'],
  initialKey: 'lg',
};

export default BrowserIFrame;
