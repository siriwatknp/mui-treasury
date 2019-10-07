import { makeStyles } from '@material-ui/styles';

import fadedShadowStyles from './faded';
import lightTopShadowStyles from './lightTop';
import softRiseShadowStyles from './softRise';
import overShadowStyles from './over';
import bouncyShadowStyles from './bouncy';
import floatShadowStyles from './float';

const useFadedShadowStyles = makeStyles(fadedShadowStyles);
const useLightTopShadowStyles = makeStyles(lightTopShadowStyles);
const useSoftRiseShadowStyles = makeStyles(softRiseShadowStyles);
const useOverShadowStyles = makeStyles(overShadowStyles);
const useBouncyShadowStyles = makeStyles(bouncyShadowStyles);
const useFloatShadowStyles = makeStyles(floatShadowStyles);

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
  floatShadowStyles,
  useFloatShadowStyles,
};
