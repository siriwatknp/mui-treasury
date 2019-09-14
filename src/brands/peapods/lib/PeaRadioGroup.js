import React from 'react';
import PropTypes from 'prop-types';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import PeaRadio from './PeaRadio';

const formControlLabelStyle = {
  marginRight: '3px',
};

const PeaRadioGroup = ({ value, onChange }) => (
  <FormControl margin={'normal'} component="fieldset">
    <FormLabel component="legend">Type</FormLabel>
    <RadioGroup
      aria-label="position"
      name="position"
      value={value}
      onChange={onChange}
      row
    >
      <FormControlLabel
        value={'PERSONAL'}
        control={<PeaRadio />}
        label="Personal"
        labelPlacement="end"
        style={formControlLabelStyle}
      />
      <FormControlLabel
        value={'EXCLUSIVE'}
        control={<PeaRadio />}
        label="Exclusive"
        labelPlacement="end"
        style={formControlLabelStyle}
      />
      <FormControlLabel
        value={'PUBLIC'}
        control={<PeaRadio />}
        label="Public"
        labelPlacement="end"
        style={formControlLabelStyle}
      />
    </RadioGroup>
  </FormControl>
);

PeaRadioGroup.metadata = {
  name: 'Pea RadioGroup',
};
PeaRadioGroup.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

PeaRadioGroup.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PeaRadioGroup;
