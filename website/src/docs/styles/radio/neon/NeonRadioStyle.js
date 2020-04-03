import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { useNeonRadioStyles } from '@mui-treasury/styles/radio/neon';

const NeonRadioStyle = () => {
  const neonStyles = useNeonRadioStyles();
  return (
    <div>
      <RadioGroup defaultValue="">
        <FormControlLabel
          control={
            <Radio
              value="1"
              disableRipple
              classes={neonStyles}
              checkedIcon={<span />}
              icon={<span />}
            />
          }
          label={'Default'}
        />
        <FormControlLabel
          control={
            <Radio
              value="2"
              disableRipple
              classes={neonStyles}
              checkedIcon={<span />}
              icon={<span />}
            />
          }
          label={'Selected'}
        />
        <FormControlLabel
          disabled
          control={
            <Radio
              value="3"
              disableRipple
              classes={neonStyles}
              checkedIcon={<span />}
              icon={<span />}
            />
          }
          label={'Disabled'}
        />
      </RadioGroup>
    </div>
  );
};
// hide-start
NeonRadioStyle.metadata = {
  title: 'Neon',
  path: 'styles/radio/neon',
  renderedWithoutIframe: false,
  creators: [require('constants/creators').siriwatknp], // add yourself to creators.js first
  createdAt: 'Fri Apr 03 2020',
  frameProps: {}, // props that applied to Box in grid view
  size: 'medium', // can be 'large' | 'huge' for grid size
  files: [{ pkg: 'mui-styles', path: 'radio/neon/neonRadio.styles.js' }],
};
// hide-end

export default NeonRadioStyle;
