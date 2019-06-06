import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import PeaRadio from './PeaRadio';

const PeaRadioGroup = () => {
  const [value, onChange] = useState('1');
  return (
    <FormControl margin={'normal'} component="fieldset">
      <FormLabel component="legend">Type</FormLabel>
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        onChange={e => onChange(e.target.value)}
        row
      >
        <FormControlLabel
          value={'1'}
          control={<PeaRadio />}
          label="Personal"
          labelPlacement="end"
        />
        <FormControlLabel
          value={'2'}
          control={<PeaRadio />}
          label="Exclusive"
          labelPlacement="end"
        />
        <FormControlLabel
          value={'3'}
          control={<PeaRadio />}
          label="Public"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
};

PeaRadioGroup.metadata = {
  name: 'Pea RadioGroup',
};
PeaRadioGroup.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaRadioGroup;
