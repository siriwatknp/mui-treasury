/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { DatePicker, TimePicker } from 'material-ui-pickers';
import PeaButton from '../lib/PeaButton';
import PeaRadio from '../lib/PeaRadio';
import PeaSlider from '../lib/PeaSlider';
import PeaTextArea from '../lib/PeaTextArea';

const Filter = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  const panelWidth = 300;
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Filter</Button>
      <Drawer open={open} onClose={onClose}>
        <Box width={panelWidth} p={2}>
          <Typography align={'center'} variant={'h5'} gutterBottom>
            Filters
          </Typography>
          <FormControl margin={'normal'} fullWidth>
            <Box display={'flex'} justifyContent={'space-between'}>
              <FormLabel>Distance (in miles)</FormLabel>
              <Typography color={'textSecondary'}>5.7 miles</Typography>
            </Box>
            <PeaSlider />
          </FormControl>
          <PeaTextArea
            label={'Enter address'}
            placeholder={'Please enter address here'}
          />
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Date</FormLabel>
            <DatePicker />
          </FormControl>
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Time</FormLabel>
            <TimePicker />
          </FormControl>
          <PeaTextArea
            label={'Keyword'}
            value={'Theater'}
            placeholder={'Type some keyword'}
          />
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Sort by</FormLabel>
            <TextField select>
              <MenuItem value={1}>Popular</MenuItem>
              <MenuItem value={2}>Newest</MenuItem>
            </TextField>
          </FormControl>
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Dating?</FormLabel>
            <RadioGroup aria-label="position" name="position" value={'1'}>
              <FormControlLabel
                value={'1'}
                control={<PeaRadio />}
                label="Show all"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'2'}
                control={<PeaRadio />}
                label="Only dating"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'3'}
                control={<PeaRadio />}
                label="No dating"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Pods range</FormLabel>
            <PeaSlider />
          </FormControl>
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Interested range</FormLabel>
            <PeaSlider />
          </FormControl>
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Attending range</FormLabel>
            <PeaSlider />
          </FormControl>
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Price range</FormLabel>
            <PeaSlider />
          </FormControl>
        </Box>
        <Box
          position={'sticky'}
          zIndex={1000}
          bottom={0}
          left={0}
          p={2}
          width={panelWidth}
          bgcolor={'common.white'}
          borderTop={'1px solid #f5f5f5'}
        >
          <PeaButton variant={'contained'} color={'primary'} fullWidth>
            Apply
          </PeaButton>
        </Box>
      </Drawer>
    </>
  );
};

Filter.metadata = {
  name: 'Pea Filter',
};
Filter.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
Filter.code = `
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import Box from '@material-ui/core/Box';
  import Drawer from '@material-ui/core/Drawer';
  import FormControl from '@material-ui/core/FormControl';
  import FormControlLabel from '@material-ui/core/FormControlLabel';
  import FormLabel from '@material-ui/core/FormLabel';
  import MenuItem from '@material-ui/core/MenuItem';
  import RadioGroup from '@material-ui/core/RadioGroup';
  import TextField from '@material-ui/core/TextField';
  import Typography from '@material-ui/core/Typography';
  import { DatePicker, TimePicker } from 'material-ui-pickers';
  import PeaButton from '../lib/PeaButton';
  import PeaRadio from '../lib/PeaRadio';
  import PeaSlider from '../lib/PeaSlider';
  import PeaTextArea from '../lib/PeaTextArea';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    const panelWidth = 300;
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Filter</Button>
        <Drawer open={open} onClose={onClose}>
          <Box width={panelWidth} p={2}>
            <Typography align={'center'} variant={'h5'} gutterBottom>
              Filters
            </Typography>
            <FormControl margin={'normal'} fullWidth>
              <Box display={'flex'} justifyContent={'space-between'}>
                <FormLabel>Distance (in miles)</FormLabel>
                <Typography color={'textSecondary'}>5.7 miles</Typography>
              </Box>
              <PeaSlider />
            </FormControl>
            <PeaTextArea
              label={'Enter address'}
              placeholder={'Please enter address here'}
            />
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Date</FormLabel>
              <DatePicker />
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Time</FormLabel>
              <TimePicker />
            </FormControl>
            <PeaTextArea
              label={'Keyword'}
              value={'Theater'}
              placeholder={'Type some keyword'}
            />
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Sort by</FormLabel>
              <TextField select>
                <MenuItem value={1}>Popular</MenuItem>
                <MenuItem value={2}>Newest</MenuItem>
              </TextField>
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Dating?</FormLabel>
              <RadioGroup aria-label="position" name="position" value={'1'}>
                <FormControlLabel
                  value={'1'}
                  control={<PeaRadio />}
                  label="Show all"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={'2'}
                  control={<PeaRadio />}
                  label="Only dating"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={'3'}
                  control={<PeaRadio />}
                  label="No dating"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Pods range</FormLabel>
              <PeaSlider />
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Interested range</FormLabel>
              <PeaSlider />
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Attending range</FormLabel>
              <PeaSlider />
            </FormControl>
            <FormControl margin={'normal'} fullWidth>
              <FormLabel>Price range</FormLabel>
              <PeaSlider />
            </FormControl>
          </Box>
          <Box
            position={'sticky'}
            zIndex={1000}
            bottom={0}
            left={0}
            p={2}
            width={panelWidth}
            bgcolor={'common.white'}
            borderTop={'1px solid #f5f5f5'}
          >
            <PeaButton variant={'contained'} color={'primary'} fullWidth>
              Apply
            </PeaButton>
          </Box>
        </Drawer>
      </>
    );
  }
`;

export default Filter;
