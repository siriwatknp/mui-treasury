import React from 'react';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import { bannerCheckboxStylesHook } from '@mui-treasury/styles/checkbox/banner';

const BannerCheckboxStyle = () => {
  const checkboxStyles = bannerCheckboxStylesHook.useCheckbox();
  const formControlLabelStyles = bannerCheckboxStylesHook.useFormControlLabel();
  const accentFormControlLabelStyles = bannerCheckboxStylesHook.useFormControlLabel(
    { color: 'secondary.light' }
  );
  const subtitleStyles = bannerCheckboxStylesHook.useSubtitle();
  return (
    <Box display="grid">
      <FormControlLabel
        classes={formControlLabelStyles}
        control={<Checkbox color="primary" classes={checkboxStyles} />}
        label={
          <>
            Auto start
            <Typography component="span" classes={subtitleStyles}>
              Starting with your OS
            </Typography>
          </>
        }
      />
      <FormControlLabel
        classes={accentFormControlLabelStyles}
        control={<Checkbox classes={checkboxStyles} />}
        label={
          <>
            Auto update
            <Typography component="span" classes={subtitleStyles}>
              Download and install new version
            </Typography>
          </>
        }
      />
      <FormControlLabel
        disabled
        classes={formControlLabelStyles}
        control={<Checkbox classes={checkboxStyles} />}
        label={
          <>
            Don't check auth key
            <Typography component="span" classes={subtitleStyles}>
              All connections will not be checked
            </Typography>
          </>
        }
      />
    </Box>
  );
};
// hide-start
BannerCheckboxStyle.metadata = {
  title: 'Banner',
  path: 'styles/checkbox/banner',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Wed Apr 01 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [
    { pkg: 'mui-styles', path: 'checkbox/banner/bannerCheckbox.styles.js' },
  ],
};
// hide-end

export default BannerCheckboxStyle;
