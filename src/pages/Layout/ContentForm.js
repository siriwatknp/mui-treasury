/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from 'extensions/Typography';
import Image from 'components/atoms/Image';
import Box from '../../components/atoms/Box';
import Row from './Row';

const squeezedUrl =
  'https://media.giphy.com/media/biwEndW7CFCG4S4jdl/giphy.gif';
const notSqueezedUrl =
  'https://media.giphy.com/media/9VcTvSZyAnV43szkIG/giphy.gif';

const ContentForm = ({ squeezed, onChange }) => (
  <>
    <Row>
      <Typography variant={'h5'} weight={'bold'} gutterBottom>
        Content
      </Typography>
    </Row>
    <Row
      left={
        <Box>
          {squeezed ? (
            <>
              <Image src={squeezedUrl} />
              <Typography variant={'caption'}>
                {
                  "Squeezed : Content & Header still remain in screen boundary when nav's width varies"
                }
              </Typography>
            </>
          ) : (
            <>
              <Image src={notSqueezedUrl} />
              <Typography variant={'caption'}>
                {
                  'Not Squeezed : Content & Header always have the same width (go out of screen boundary, user can scroll right to see content)'
                }
              </Typography>
            </>
          )}
        </Box>
      }
      right={
        <FormControl margin={'dense'}>
          <FormControlLabel
            checked={squeezed}
            onChange={e => onChange(['squeezed'], [e.target.checked])}
            control={<Checkbox />}
            label={'Squeezed (including Header)'}
          />
          <FormHelperText style={{ marginBottom: 16 }}>
            If squeezed, both header and content will reduce its width to stay
            in the screen boundary
          </FormHelperText>
        </FormControl>
      }
    />
  </>
);

ContentForm.propTypes = {
  squeezed: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
ContentForm.defaultProps = {};

export default ContentForm;
