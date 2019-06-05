/* eslint-disable max-len */
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import { DatePicker, TimePicker } from 'material-ui-pickers';
import PeaSwitch from '../lib/PeaSwitch';
import PeaDialog from '../lib/PeaDialog';
import PeaButton from '../lib/PeaButton';
import PeaTextArea from '../lib/PeaTextArea';

// constants
import peaActivism from '../lib/assets/pea_activism.png';
import peaArtAndCulture from '../lib/assets/pea_art-and-culture.png';
import peaCommunity from '../lib/assets/pea_community.png';
import peaFood from '../lib/assets/pea_food.png';
import peaGaming from '../lib/assets/pea_gaming.png';
import peaHobbie from '../lib/assets/pea_hobbie.png';
import peaLearning from '../lib/assets/pea_learning.png';
import peaMovie from '../lib/assets/pea_movie.png';
import peaMusic from '../lib/assets/pea_music.png';
import peaNetworking from '../lib/assets/pea_networking.png';
import peaOutdoor from '../lib/assets/pea_outdoor.png';
import peaSpirituality from '../lib/assets/pea_spirituality.png';
import peaSport from '../lib/assets/pea_sport.png';
import peaVolunteering from '../lib/assets/pea_volunteering.png';
import PeaCategoryToggle from '../lib/PeaCategoryToggle';

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

const EventDialog = () => {
  const [open, setOpen] = useState(false);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create Event</Button>
      <PeaDialog
        open={open}
        className={'PeaEventDialog'}
        title={'Create event'}
        content={
          <>
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
              <Grid container spacing={2}>
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
            <PeaTextArea
              label={'Description'}
              placeholder={'Type few words about your event'}
            />
            <PeaTextArea label={'Hashtags'} placeholder={'#search_hashtags'} />
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
            <PeaTextArea
              label={'Inviting guests'}
              placeholder={'Start typing name'}
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
          </>
        }
        actions={[
          <PeaButton elongated onClick={onClose}>
            Cancel
          </PeaButton>,
          <PeaButton
            elongated
            color={'primary'}
            variant={'contained'}
            onClick={onClose}
          >
            Create
          </PeaButton>,
        ]}
        onClose={onClose}
      />
    </>
  );
};

EventDialog.metadata = {
  name: 'Pea EventDialog',
};
EventDialog.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';
EventDialog.code = `
  import React, { useState } from 'react';
  import Button from '@material-ui/core/Button';
  import TextField from '@material-ui/core/TextField';
  import FormControl from '@material-ui/core/FormControl';
  import FormLabel from '@material-ui/core/FormLabel';
  import Grid from '@material-ui/core/Grid';
  import { DatePicker, TimePicker } from 'material-ui-pickers';
  import PeaSwitch from '../lib/PeaSwitch';
  import PeaDialog from '../lib/PeaDialog';
  import PeaButton from '../lib/PeaButton';
  import PeaTextArea from '../lib/PeaTextArea';
  
  const Preview = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => setOpen(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Create Event</Button>
        <PeaDialog
          open={open}
          className={'PeaEventDialog'}
          title={'Create event'}
          content={
            <>
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
                <Grid container spacing={2}>
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
              <PeaTextArea
                label={'Description'}
                placeholder={'Type few words about your event'}
              />
              <PeaTextArea label={'Hashtags'} placeholder={'#search_hashtags'} />
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
              <PeaTextArea
                label={'Inviting guests'}
                placeholder={'Start typing name'}
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
            </>
          }
          actions={[
            <PeaButton elongated onClick={onClose}>
              Cancel
            </PeaButton>,
            <PeaButton
              elongated
              color={'primary'}
              variant={'contained'}
              onClick={onClose}
            >
              Create
            </PeaButton>,
          ]}
          onClose={onClose}
        />
      </>
    );
  }
`;

export default EventDialog;
