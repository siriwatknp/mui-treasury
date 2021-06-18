import makeStyles from '@material-ui/styles/makeStyles';
import airbnbSwitchStyles from './airbnbSwitch.styles';

const useAirbnbSwitchStyles = makeStyles(airbnbSwitchStyles, {
  name: 'AirbnbSwitch',
});

export { airbnbSwitchStyles, useAirbnbSwitchStyles };

export { default } from './airbnbSwitch.styles';
