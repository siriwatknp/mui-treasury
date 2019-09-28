import { makeStyles } from '@material-ui/styles';

import fadedShadowStyles from './faded';
import lightTopShadowStyles from './lightTop';
import softRiseShadowStyles from './softRise';
import overShadowStyles from './over';

const useFadedShadowStyles = makeStyles(fadedShadowStyles);
const useLightTopShadowStyles = makeStyles(lightTopShadowStyles);
const useSoftRiseShadowStyles = makeStyles(softRiseShadowStyles);
const useOverShadowStyles = makeStyles(overShadowStyles);

export {
  fadedShadowStyles,
  useFadedShadowStyles,
  lightTopShadowStyles,
  useLightTopShadowStyles,
  softRiseShadowStyles,
  useSoftRiseShadowStyles,
  overShadowStyles,
  useOverShadowStyles,
};
