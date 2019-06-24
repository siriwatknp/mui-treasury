/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PeaSlider from './PeaSlider';
import PeaRadio from './PeaRadio';
import PeaButton from './PeaButton';

const panelWidth = 463;

const PeaUserFilters = ({ open, onClose }) => {
  const [genderValue, onGenderValueChange] = useState('1');
  const [sortByValue, onSortByValueChange] = useState(1);

  return (
    <Drawer open={open} onClose={onClose}>
      <Box width={panelWidth} p={2}>
        <Typography
          align={'center'}
          variant={'h4'}
          color={'secondary'}
          gutterBottom
        >
          Filters
        </Typography>
        <FormControl margin={'normal'} fullWidth>
          <Typography variant={'h6'} color={'secondary'}>
            Location
          </Typography>
          <div>Map component here</div>
        </FormControl>
        <FormControl margin={'normal'} fullWidth>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant={'h6'} color={'secondary'}>
              Distance (in miles)
            </Typography>
            <Typography variant={'caption'} color={'textSecondary'}>
              5.7 miles
            </Typography>
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
          placeholder={'Please enter the address here'}
        />
        <FormControl margin={'normal'} fullWidth>
          <Box display={'flex'} justifyContent={'space-between'}>
            <Typography variant={'h6'} color={'secondary'}>
              Has profile image
            </Typography>
            <Checkbox color="primary" />
          </Box>
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
          label={'Keywords'}
          placeholder={'Please enter a keyword here'}
        />
        <FormControl margin={'normal'} fullWidth>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Typography variant={'h6'} color={'secondary'}>
              Age
            </Typography>
            <Typography variant={'caption'} color={'secondary'}>
              0 - 100
            </Typography>
          </Box>
          <PeaSlider />
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            marginTop={-2}
          >
            <Typography variant={'caption'} color={'textSecondary'}>
              0
            </Typography>
            <Typography variant={'caption'} color={'textSecondary'}>
              50
            </Typography>
            <Typography variant={'caption'} color={'textSecondary'}>
              100
            </Typography>
          </Box>
        </FormControl>
        <FormControl margin={'normal'} component="fieldset" fullWidth>
          <Typography variant={'h6'} color={'secondary'}>
            Gender
          </Typography>
          <RadioGroup
            aria-label="position"
            name="position"
            value={genderValue}
            onChange={e => onGenderValueChange(e.target.value)}
            row
            fullWidth
          >
            <Box
              display={'flex'}
              justifyContent={'space-between'}
              alignItems={'center'}
              fullWidth
            >
              <FormControlLabel
                value={'1'}
                control={<PeaRadio />}
                label="Both"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'2'}
                control={<PeaRadio />}
                label="Male"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'3'}
                control={<PeaRadio />}
                label="Female"
                labelPlacement="end"
              />
            </Box>
          </RadioGroup>
        </FormControl>
        <FormControl margin={'normal'} fullWidth>
          <Typography variant={'h6'} color={'secondary'}>
            Sort by
          </Typography>
          <TextField
            select
            fullWidth
            margin={'dense'}
            value={sortByValue || ''}
            onChange={e => onSortByValueChange(e.target.value)}
          >
            <MenuItem value={1}>Distance</MenuItem>
            <MenuItem value={2}>Newest</MenuItem>
          </TextField>
        </FormControl>
        <Box
          padding={2}
          marginTop={4}
          marginBottom={4}
          display={'flex'}
          justifyContent={'space-around'}
          alignItems={'center'}
        >
          <PeaButton color={'textSecondary'}>Cancel</PeaButton>
          <PeaButton elongated variant={'contained'} color={'primary'}>
            Apply
          </PeaButton>
        </Box>
      </Box>
    </Drawer>
  );
};

PeaUserFilters.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
PeaUserFilters.metadata = {
  name: 'Pea UserFilters',
};

export default PeaUserFilters;
