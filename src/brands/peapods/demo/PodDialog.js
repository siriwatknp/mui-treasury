/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import PeaRadio from '../lib/PeaRadio';
import PeaDialog from '../lib/PeaDialog';
import PeaButton from '../lib/PeaButton';
import PeaCounter from '../lib/PeaCounter';

const PodDialog = () => {
  const [open, setOpen] = useState(false);
  const [value, onChange] = useState('1');
  const [value2, onChange2] = useState('1');
  const [value3, onChange3] = useState(0);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Pod</Button>
      <PeaDialog
        open={open}
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
      />
    </>
  );
};

PodDialog.metadata = {
  name: 'Pea PodDialog',
};
PodDialog.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
PodDialog.code = `
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import FormControl from '@material-ui/core/FormControl';
  import FormControlLabel from '@material-ui/core/FormControlLabel';
  import FormLabel from '@material-ui/core/FormLabel';
  import RadioGroup from '@material-ui/core/RadioGroup';
  import PeaRadio from '../lib/PeaRadio';
  import PeaDialog from '../lib/PeaDialog';
  import PeaButton from '../lib/PeaButton';
  import PeaCounter from '../lib/PeaCounter';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    const [value, onChange] = useState('1');
    const [value2, onChange2] = useState('1');
    const [value3, onChange3] = useState(0);
    const onClose = () => setOpen(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Create Pod</Button>
        <PeaDialog
          open={open}
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
        />
      </>
    );
  }
`;

export default PodDialog;
