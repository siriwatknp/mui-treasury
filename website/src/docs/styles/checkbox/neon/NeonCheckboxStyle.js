import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon';

const NeonCheckboxStyle = () => {
  const neonStyles = useNeonCheckboxStyles();
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            disableRipple
            classes={neonStyles}
            checkedIcon={<span />}
            icon={<span />}
          />
        }
        label={'Awesome'}
      />
      <br />
      <FormControlLabel
        control={
          <Checkbox
            disableRipple
            classes={neonStyles}
            checkedIcon={<span />}
            icon={<span className="Mui-error" />}
          />
        }
        label={'Error'}
      />
      <br />
      <FormControlLabel
        disabled
        control={
          <Checkbox
            disableRipple
            classes={neonStyles}
            checkedIcon={<span />}
            icon={<span />}
          />
        }
        label={'Disabled'}
      />
    </div>
  );
};
// hide-start
NeonCheckboxStyle.metadata = {
  title: 'Neon',
  path: 'styles/checkbox/neon',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Thu Apr 02 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'checkbox/neon/neonCheckbox.styles.js' }],
};
// hide-end

export default NeonCheckboxStyle;
