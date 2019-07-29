import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaRadio from './PeaRadio';
import PeaStatistic from './PeaStatistic';
import PeaSwitch from './PeaSwitch';
import PeaTextArea from './PeaTextArea';
import PeaText from './PeaTypography';

const PeaProfileEditor = ({
  cover,
  image,
  name,
  tag,
  site,
  bio,
  location,
  tags,
  onCancel,
  onSubmit,
}) => (
  <Card className={'PeaFullProfile-root'}>
    <CardMedia className={'MuiCardMedia-root'} image={cover}>
      <ButtonBase className={'PeaFullProfile-coverImgBtn'}>
        <PeaIcon
          style={{ marginTop: -40 }}
          inverted
          icon={'panorama'}
          shape={'square'}
        />
        <PeaText inverted>Change cover picture</PeaText>
      </ButtonBase>
    </CardMedia>
    <CardContent className={'MuiCardContent-root'}>
      <Grid container justify={'space-between'} spacing={2}>
        <Grid item>
          <ButtonBase className={'PeaFullProfile-profileImgBtn'}>
            <PeaAvatar className={'MuiAvatar-root-profilePic'} src={image} />
            <Box position={'absolute'}>
              <PeaIcon
                inverted
                icon={'add_photo_alternate'}
                shape={'square'}
                size={'large'}
              />
              <PeaText inverted size={'small'}>
                Change
              </PeaText>
            </Box>
          </ButtonBase>
        </Grid>
        <Grid item>
          <PeaButton
            size={'small'}
            onClick={onCancel}
            style={{ marginRight: 8, minWidth: 70 }}
          >
            Cancel
          </PeaButton>
          <PeaButton
            size={'small'}
            onClick={onSubmit}
            variant={'contained'}
            color={'primary'}
            style={{ minWidth: 100 }}
          >
            Save
          </PeaButton>
        </Grid>
      </Grid>
      <Hidden smUp>
        <Grid container justify={'space-evenly'} style={{ marginTop: -32 }}>
          <Grid item>
            <PeaStatistic label={'Pods'} value={2} />
          </Grid>
          <Grid item>
            <PeaStatistic label={'Following'} value={48} />
          </Grid>
          <Grid item>
            <PeaStatistic label={'Followers'} value={5} />
          </Grid>
        </Grid>
        <br />
      </Hidden>
      <Hidden only={'xs'}>
        <div style={{ marginTop: -32 }} />
      </Hidden>
      <div>
        <TextField margin={'normal'} label={'Name'} value={name} />
      </div>
      <div>
        <TextField margin={'normal'} label={'Username'} value={tag} />
      </div>
      <TextField fullWidth margin={'normal'} label={'Website'} value={site} />
      <br />
      <PeaTextArea.Simple label={'Bio'} value={bio} />
      <PeaTextArea.Simple label={'Location'} value={location} />
      <br />
      <PeaText gutterBottom variant={'subtitle1'} weight={'bold'}>
        About
      </PeaText>
      <Grid container spacing={2}>
        <Grid item xs sm={3}>
          <TextField fullWidth select label={'Year'} />
        </Grid>
        <Grid item xs sm={3}>
          <TextField fullWidth select label={'Month'} />
        </Grid>
        <Grid item xs sm={3}>
          <TextField fullWidth select label={'Day'} />
        </Grid>
      </Grid>
      <div>
        <FormControl margin={'normal'} component="fieldset">
          <FormLabel component="legend">Status</FormLabel>
          <RadioGroup aria-label="status" name="gender" value={'1'} row>
            <FormControlLabel
              value={'1'}
              control={<PeaRadio />}
              label="Male"
              labelPlacement="end"
            />
            <FormControlLabel
              value={'2'}
              control={<PeaRadio />}
              label="Female"
              labelPlacement="end"
            />
            <FormControlLabel
              value={'3'}
              control={<PeaRadio />}
              label="Non-binary"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <PeaTextArea.Simple
        label={'Tags'}
        value={tags.map(({ label }) => `#${label}`).join(', ')}
      />
      <>
        <TextField
          label={'Email'}
          value={'sam@gmail.com'}
          margin={'normal'}
          fullWidth
        />
        <TextField
          label={'Phone'}
          placeholder={'Please enter your phone'}
          margin={'normal'}
          fullWidth
        />
        <FormControl margin={'normal'} fullWidth>
          <FormLabel>Private account</FormLabel>
          <PeaSwitch checked />
        </FormControl>
        <FormControl margin={'normal'} fullWidth>
          <FormLabel>Linked accounts</FormLabel>
          <Grid container>
            <Grid item>
              <IconButton>
                <PeaIcon
                  link
                  icon={'fab fa-twitter'}
                  color={'secondary'}
                  bgColor={'white'}
                  size={'big'}
                  shadow
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <PeaIcon
                  link
                  icon={'fab fa-meetup'}
                  bgColor={'white'}
                  size={'big'}
                  shadow
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton>
                <PeaIcon
                  link
                  icon={'fab fa-facebook-f'}
                  bgColor={'white'}
                  shadow
                  size={'big'}
                />
              </IconButton>
            </Grid>
          </Grid>
        </FormControl>
      </>
    </CardContent>
  </Card>
);

PeaProfileEditor.propTypes = {
  image: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  site: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    }),
  ),
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};
PeaProfileEditor.defaultProps = {
  tag: '',
  site: '',
  bio: '',
  location: '',
  tags: [],
  onSubmit: () => {},
  onCancel: () => {},
};
PeaProfileEditor.propTypes = {};
PeaProfileEditor.defaultProps = {};

export default PeaProfileEditor;
