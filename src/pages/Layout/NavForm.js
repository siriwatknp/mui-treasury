/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio/Radio';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from 'components/predefined/Typography';
import Image from 'components/atoms/Image';
import Row from './Row';

const variants = {
  permanent:
    'https://firebasestorage.googleapis.com/v0/b/mui-treasury.appspot.com/o/public%2FPermanentDrawer.png?alt=media',
  persistent: 'https://media.giphy.com/media/aiPLusqkGwE1bkwHld/giphy.gif',
  temporary: 'https://media.giphy.com/media/pb5dbym2KnNmoZmN6y/giphy.gif',
};

const NavForm = ({
  navVariant,
  navWidth,
  collapsible,
  collapsedWidth,
  onChange,
}) => (
  <div>
    <Row>
      <Typography variant={'h5'} weight={'bold'} gutterBottom>
        Navigation
      </Typography>
    </Row>
    <Row
      labelLeft={'Variant'}
      left={
        <>
          <Image src={variants[navVariant]} />
          <Typography variant={'caption'}>
            Example variant ({navVariant})
          </Typography>
        </>
      }
      right={
        <FormControl fullWidth component="fieldset">
          <RadioGroup
            aria-label="nav variant"
            name="navVariant"
            value={navVariant}
            onChange={e => onChange(['navVariant'], [e.target.value])}
          >
            <FormControlLabel
              value="permanent"
              control={<Radio />}
              label="Permanent"
            />
            <FormControlLabel
              value="persistent"
              control={<Radio />}
              label="Persistent"
            />
            <FormControlLabel
              value="temporary"
              control={<Radio />}
              label="Temporary"
            />
          </RadioGroup>
        </FormControl>
      }
    />
    <Row
      labelLeft={'Width'}
      left={
        <>
          <Image
            src={
              'https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F10UGo-uwu3HViW96viJ-EVtV2PSBAF99c%2Fanatomy.png'
            }
          />
          <Typography variant={'caption'}>No 1. is nav width</Typography>
        </>
      }
      right={
        <TextField
          margin={'normal'}
          style={{ maxWidth: 256 }}
          fullWidth
          variant={'outlined'}
          placeholder={'only number'}
          value={navWidth}
          onChange={e =>
            onChange(
              ['navWidth'],
              [Number(e.target.value) ? Number(e.target.value) : 0],
            )
          }
          helperText={
            'Accepts number only. Width value around 192px - 256px is recommended.'
          }
        />
      }
    />
    <Row
      labelLeft={'Collapsible'}
      left={
        <>
          <Image
            src={'https://media.giphy.com/media/iDLEHhjfrdwJpxOoC6/giphy.gif'}
          />
        </>
      }
      right={
        <>
          <FormControl>
            <FormControlLabel
              checked={collapsible}
              onChange={e => onChange(['collapsible'], [e.target.checked])}
              control={<Checkbox />}
              label={'Enabled'}
            />
            <FormHelperText style={{ marginBottom: 16 }}>
              Collapsible Nav will allow user to reduce its width to give more
              space to the screen
            </FormHelperText>
          </FormControl>
          {collapsible && (
            <TextField
              style={{ maxWidth: 256 }}
              fullWidth
              margin={'normal'}
              label={'Collapsed width'}
              variant={'outlined'}
              placeholder={'only number'}
              value={collapsedWidth}
              helperText={'width of nav after collapsed'}
              onChange={e =>
                onChange(
                  ['collapsedWidth'],
                  [Number(e.target.value) ? Number(e.target.value) : 0],
                )
              }
            />
          )}
        </>
      }
    />
  </div>
);

NavForm.propTypes = {
  navVariant: PropTypes.string.isRequired,
  navWidth: PropTypes.number.isRequired,
  collapsible: PropTypes.bool.isRequired,
  collapsedWidth: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
NavForm.defaultProps = {};

export default NavForm;
