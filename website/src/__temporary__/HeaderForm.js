/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel/FormLabel';
import Radio from '@material-ui/core/Radio/Radio';
import RadioGroup from '@material-ui/core/RadioGroup/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from 'components/extensions/Typography';
import Image from 'components/atoms/Image';
import Box from 'components/atoms/Box';
import Row from './Row';

const HeaderForm = ({ clipped, headerPosition, onChange }) => (
  <>
    <Row>
      <Typography variant={'h5'} weight={'bold'} gutterBottom>
        Header
      </Typography>
    </Row>
    <Row
      left={
        <Box>
          {clipped ? (
            <>
              <Image
                src={
                  'https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1CPoEQp4vBj9aRARuqexAbZhqBxJukOiX%2Fstandard-elevation-below.png'
                }
              />
              <Typography variant={'caption'}>Clipped</Typography>
            </>
          ) : (
            <>
              <Image
                src={
                  'https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F1BWYUFsIrTILjcB9tS10JMDjyLakpNtL3%2Fstandard-elevation-top-app-bar.png'
                }
              />
              <Typography variant={'caption'}>
                Full height (not clipped)
              </Typography>
            </>
          )}
        </Box>
      }
      right={
        <FormControl margin={'dense'}>
          <FormControlLabel
            checked={clipped}
            onChange={e => onChange(['clipped'], [e.target.checked])}
            control={<Checkbox />}
            label={'Clipped'}
          />
          <FormHelperText>Bring header to the top layer</FormHelperText>
        </FormControl>
      }
    />
    <Row
      right={
        <FormControl fullWidth margin={'normal'} component="fieldset">
          <FormLabel component="legend">
            <Typography gutterBottom>Variant</Typography>
          </FormLabel>
          <RadioGroup
            aria-label="header position"
            name="headerPosition"
            value={headerPosition}
            onChange={e => onChange(['headerPosition'], [e.target.value])}
          >
            <FormControlLabel
              value="relative"
              control={<Radio />}
              label="Relative (default)"
            />
            <FormControlLabel
              value="sticky"
              control={<Radio />}
              label="Sticky"
            />
            <FormControlLabel value="fixed" control={<Radio />} label="Fixed" />
          </RadioGroup>
        </FormControl>
      }
    />
  </>
);

HeaderForm.propTypes = {
  clipped: PropTypes.bool.isRequired,
  headerPosition: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
HeaderForm.defaultProps = {};

export default HeaderForm;
