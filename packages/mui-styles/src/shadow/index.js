import { makeStyles } from '@material-ui/styles';

import fadedShadowStyles from './faded';
import lightTopShadowStyles from './lightTop';
import softRiseShadowStyles from './softRise';
import overShadowStyles from './over';
import bouncyShadowStyles from './bouncy';

const useFadedShadowStyles = makeStyles(fadedShadowStyles);
const useLightTopShadowStyles = makeStyles(lightTopShadowStyles);
const useSoftRiseShadowStyles = makeStyles(softRiseShadowStyles);
const useOverShadowStyles = makeStyles(overShadowStyles);
const useBouncyShadowStyles = makeStyles(bouncyShadowStyles);

export {
  fadedShadowStyles,
  useFadedShadowStyles,
  lightTopShadowStyles,
  useLightTopShadowStyles,
  softRiseShadowStyles,
  useSoftRiseShadowStyles,
  overShadowStyles,
  useOverShadowStyles,
  bouncyShadowStyles,
  useBouncyShadowStyles,
};
