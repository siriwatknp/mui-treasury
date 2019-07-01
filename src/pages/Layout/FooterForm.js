import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from 'extensions/Typography';
import Box from 'components/atoms/Box';
import Image from 'components/atoms/Image';
import Row from './Row';

const shrinkUrl = 'https://media.giphy.com/media/DBPO8m6Ua4npLxRY4T/giphy.gif';
const notShrinkUrl =
  'https://media.giphy.com/media/fQrS0Gq2AvZAQgWoeT/giphy.gif';

const FooterForm = ({ footerShrink, onChange }) => (
  <>
    <Row>
      <Typography variant={'h5'} weight={'bold'} gutterBottom>
        Footer
      </Typography>
    </Row>
    <Row
      left={
        <Box>
          {footerShrink ? (
            <>
              <Image src={shrinkUrl} />
              <Typography variant={'caption'}>
                Shrank : Footer remain in screen & show all children.
              </Typography>
            </>
          ) : (
            <>
              <Image src={notShrinkUrl} />
              <Typography variant={'caption'}>
                Full width : some area of Footer is covered be Nav.
              </Typography>
            </>
          )}
        </Box>
      }
      right={
        <FormControl margin={'dense'}>
          <FormControlLabel
            checked={footerShrink}
            onChange={e => onChange(['footerShrink'], [e.target.checked])}
            control={<Checkbox />}
            label={'Shrank'}
          />
          <FormHelperText style={{ marginBottom: 16 }}>
            If shrank, footer will reduce width and display all children on the
            screen.
          </FormHelperText>
        </FormControl>
      }
    />
  </>
);

FooterForm.propTypes = {
  footerShrink: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
FooterForm.defaultProps = {};

export default FooterForm;
