/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, TimePicker } from 'material-ui-pickers';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import { unstable_Box as Box } from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PeaSlider from './PeaSlider';
import PeaRadio from './PeaRadio';
import PeaButton from './PeaButton';

const panelWidth = 300;

const PeaFilter = ({ open, onClose }) => (
  <Drawer open={open} onClose={onClose} >
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
      <TextField
        multiline
        rows={3}
        classes={{
          root: 'PeaFormControl-root',
        }}
        InputLabelProps={{
          className: 'PeaFormLabel-root',
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: 'PeaInput-root',
            input: 'PeaInput-input',
            formControl: 'PeaInput-formControl',
          },
        }}
        FormHelperTextProps={{
          className: 'PeaFormHelperText-root',
        }}
        fullWidth
        margin={'normal'}
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
      <TextField
        multiline
        rows={3}
        classes={{
          root: 'PeaFormControl-root',
        }}
        InputLabelProps={{
          className: 'PeaFormLabel-root',
        }}
        InputProps={{
          disableUnderline: true,
          classes: {
            root: 'PeaInput-root',
            input: 'PeaInput-input',
            formControl: 'PeaInput-formControl',
          },
        }}
        FormHelperTextProps={{
          className: 'PeaFormHelperText-root',
        }}
        fullWidth
        margin={'normal'}
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
);

PeaFilter.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
PeaFilter.metadata = {
  name: 'Pea Filter',
};

export default PeaFilter;
