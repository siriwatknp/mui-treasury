import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaRadio from './PeaRadio';
import PeaCounter from './PeaCounter';

const PeaPodDialog = ({ onClose, ...props }) => {
  const [value, onChange] = useState('1');
  const [value2, onChange2] = useState('1');
  const [value3, onChange3] = useState(0);
  return (
    <PeaDialog
      className={'PeaPodDialog'}
      title={'Create pod'}
      content={
        <React.Fragment>
          <FormControl margin={'normal'} component="fieldset">
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              name="status"
              value={value}
              onChange={e => onChange(e.target.value)}
              row
            >
              <FormControlLabel
                value={'1'}
                control={<PeaRadio />}
                label="Interested"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'2'}
                control={<PeaRadio />}
                label="Attending"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <FormControl margin={'normal'} component="fieldset">
            <FormLabel component="legend">Privacy</FormLabel>
            <RadioGroup
              aria-label="privacy"
              name="privacy"
              value={value2}
              onChange={e => onChange2(e.target.value)}
              row
            >
              <FormControlLabel
                value={'1'}
                control={<PeaRadio />}
                label="Public"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'2'}
                control={<PeaRadio />}
                label="Followers"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'3'}
                control={<PeaRadio />}
                label="Custom"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <FormControl margin={'normal'} component="fieldset">
            <FormLabel component="legend">Size limit</FormLabel>
            <PeaCounter
              value={value3}
              onChange={e => onChange3(e.target.value)}
            />
          </FormControl>
        </React.Fragment>
      }
      actions={[
        <PeaButton onClick={onClose}>Cancel</PeaButton>,
        <PeaButton color={'primary'} variant={'contained'} onClick={onClose}>
          Create
        </PeaButton>,
      ]}
      onClose={onClose}
      {...props}
    />
  );
};

PeaPodDialog.metadata = {
  name: 'Pea Pod Dialog',
};
PeaPodDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PeaPodDialog;
