import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  bannerCheckboxStyles,
  bannerFormControlLabelStyles,
  bannerSubtitleStyles,
} from './bannerCheckbox.styles';

const bannerCheckboxStylesHook = {
  useCheckbox: makeStyles(bannerCheckboxStyles, {
    name: 'BannerCheckbox',
  }),
  useFormControlLabel: makeStyles(bannerFormControlLabelStyles, {
    name: 'BannerCheckbox',
  }),
  useSubtitle: makeStyles(bannerSubtitleStyles, {
    name: 'BannerCheckbox',
  }),
};

export {
  bannerCheckboxStyles,
  bannerFormControlLabelStyles,
  bannerSubtitleStyles,
  bannerCheckboxStylesHook,
};
