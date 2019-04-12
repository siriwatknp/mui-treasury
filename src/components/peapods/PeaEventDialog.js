import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, TimePicker } from 'material-ui-pickers';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField/TextField';
import Grid from '@material-ui/core/Grid';
import PeaDialog from './PeaDialog';
import PeaButton from './PeaButton';
import PeaSwitch from './PeaSwitch';
import PeaCategoryToggle from './PeaCategoryToggle';
import peaActivism from './assets/pea_activism.png';
import peaArtAndCulture from './assets/pea_art-and-culture.png';
import peaCommunity from './assets/pea_community.png';
import peaFood from './assets/pea_food.png';
import peaGaming from './assets/pea_gaming.png';
import peaHobbie from './assets/pea_hobbie.png';
import peaLearning from './assets/pea_learning.png';
import peaMovie from './assets/pea_movie.png';
import peaMusic from './assets/pea_music.png';
import peaNetworking from './assets/pea_networking.png';
import peaOutdoor from './assets/pea_outdoor.png';
import peaSpirituality from './assets/pea_spirituality.png';
import peaSport from './assets/pea_sport.png';
import peaVolunteering from './assets/pea_volunteering.png';

const categories = [
  { image: peaActivism, label: 'Activism' },
  { image: peaArtAndCulture, label: 'Art & Culture' },
  { image: peaCommunity, label: 'Community' },
  { image: peaFood, label: 'Food' },
  { image: peaGaming, label: 'Gaming' },
  { image: peaHobbie, label: 'Hobbie' },
  { image: peaLearning, label: 'Learning' },
  { image: peaMovie, label: 'Movie' },
  { image: peaMusic, label: 'Music' },
  { image: peaNetworking, label: 'Networking' },
  { image: peaOutdoor, label: 'Outdoor' },
  { image: peaSpirituality, label: 'Spirituality' },
  { image: peaSport, label: 'Sport' },
  { image: peaVolunteering, label: 'Volunteering' },
];

const PeaEventDialog = ({ onClose, ...props }) => (
  <PeaDialog
    className={'PeaEventDialog'}
    title={'Create event'}
    content={
      <React.Fragment>
        <TextField
          fullWidth
          margin={'normal'}
          label={'Title'}
          placeholder={'Type the title of your event'}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl fullWidth margin={'normal'}>
          <FormLabel style={{ marginBottom: 16 }}>Category</FormLabel>
          <Grid container spacing={16}>
            {categories.map(({ image, label }, index) => (
              <Grid key={label} item xs={4} sm={3}>
                <PeaCategoryToggle
                  checked={index === 0}
                  label={label}
                  src={image}
                />
              </Grid>
            ))}
          </Grid>
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
          label={'Description'}
          placeholder={'Type few words about your event'}
        />
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
          label={'Hashtags'}
          placeholder={'#search_hashtags'}
        />
        <FormControl margin={'normal'} fullWidth>
          <FormLabel>Date</FormLabel>
          <DatePicker />
        </FormControl>
        <FormControl margin={'normal'} fullWidth>
          <FormLabel>Time</FormLabel>
          <TimePicker />
        </FormControl>
        <FormControl margin={'normal'}>
          <FormLabel>Private event</FormLabel>
          <PeaSwitch checked />
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
          label={'Inviting guests'}
          placeholder={'Start typing name'}
          {...props}
        />
        <TextField
          fullWidth
          margin={'normal'}
          label={'Ticket price'}
          placeholder={'Type ticket price, $'}
          InputLabelProps={{
            shrink: true,
          }}
        />
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

PeaEventDialog.metadata = {
  name: 'Pea Event Dialog',
  libraries: [
    {
      text: 'material-ui-pickers',
      link: 'https://material-ui-pickers.dev/getting-started/installation',
    },
  ],
};
PeaEventDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PeaEventDialog;
