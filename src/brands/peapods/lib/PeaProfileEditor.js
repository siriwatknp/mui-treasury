import React, { useState } from 'react';
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
import { uniqBy } from 'lodash';
import emailValidator from 'email-validator';
import phone from 'phone';

import { DatePicker } from '../index';

import PeaAvatar from './PeaAvatar';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaRadio from './PeaRadio';
import PeaStatistic from './PeaStatistic';
import PeaSwitch from './PeaSwitch';
import PeaTextArea from './PeaTextArea';
import PeaText from './PeaTypography';
import PeaLoadingSpinner from './PeaLoadingSpinner';
import PeaAutocompleteList from './PeaAutocompleteList';

const PeaProfileEditor = ({
  cover,
  image,
  name,
  email,
  phoneNumber,
  userName,
  bio,
  birthday,
  location,
  locationInput: LocationInput,
  tags,
  gender,
  isPrivate,
  onCancel,
  onSubmit,
  onChangeCoverPhotoClicked,
  onChangeProfilePhotosClicked,
  isUpdating,
}) => {
  const [user, setUser] = useState({
    name,
    username: userName,
    email,
    phoneNumber,
    location,
    bio,
    birthday,
    gender,
    tags,
    privateAccount: isPrivate,
  });

  const [error, setError] = useState({});

  const onUserChange = field => event => {
    let { value } = event.target;
    if (field === 'privateAccount') {
      value = event.target.checked;
    }
    if (field === 'email') {
      setError({ ...error, email: value && !emailValidator.validate(value) });
    }
    if (field === 'phoneNumber') {
      const [formattedPhoneNumber] = phone(value);
      setError({ ...error, phoneNumber: value && !formattedPhoneNumber });
    }
    setUser({
      ...user,
      [field]: value,
    });
  };

  const onLocationChange = res => {
    if (!res) {
      return;
    }

    const lat = res.geometry.location.lat();
    const lng = res.geometry.location.lng();
    const formattedAddress = res.formatted_address;

    const newLocation = {
      lat,
      lng,
      formattedAddress,
    };
    setUser({
      ...user,
      location: newLocation,
    });
  };

  const onBirthdayChange = date => {
    setUser({
      ...user,
      birthday: date,
    });
  };

  const onTagsChanged = values => {
    setUser({
      ...user,
      tags: uniqBy(values, 'value'),
    });
  };

  let hasError = false;
  Object.keys(error).forEach(key => {
    hasError = hasError || error[key];
  });

  return (
    <Card className={'PeaFullProfile-root'}>
      <CardMedia className={'MuiCardMedia-root'} image={cover}>
        <ButtonBase
          className={'PeaFullProfile-coverImgBtn'}
          onClick={onChangeCoverPhotoClicked}
        >
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
            <ButtonBase
              className={'PeaFullProfile-profileImgBtn'}
              onClick={onChangeProfilePhotosClicked}
            >
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
              onClick={onSubmit(user)}
              variant={'contained'}
              color={'primary'}
              style={{ minWidth: 100 }}
              disabled={isUpdating || hasError}
            >
              {isUpdating ? (
                <PeaLoadingSpinner size={20} style={{ margin: 0 }} />
              ) : (
                'Save'
              )}
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
          <TextField
            margin={'normal'}
            label={'Name'}
            className={'PeaFormControl-root'}
            InputLabelProps={{ className: 'PeaFormLabel-root' }}
            value={user.name}
            onChange={onUserChange('name')}
          />
        </div>
        <div>
          <TextField
            margin={'normal'}
            label={'Username'}
            className={'PeaFormControl-root'}
            InputLabelProps={{ className: 'PeaFormLabel-root' }}
            value={user.username}
            onChange={onUserChange('username')}
          />
        </div>
        <PeaTextArea
          label={'Bio'}
          value={user.bio}
          onChange={onUserChange('bio')}
        />
        {LocationInput && (
          <LocationInput
            removeSpacing
            onChange={onLocationChange}
            value={user.location && user.location.formattedAddress}
          />
        )}
        <br />
        <PeaText gutterBottom variant={'subtitle1'} weight={'bold'}>
          About
        </PeaText>
        <Grid container>
          <DatePicker
            label={'Birthday'}
            className={'PeaFormControl-root'}
            InputLabelProps={{ className: 'PeaFormLabel-root' }}
            format="MM/DD/YYYY"
            value={user.birthday}
            onChange={onBirthdayChange}
          />
        </Grid>

        <div>
          <FormControl margin={'normal'} component="fieldset">
            <FormLabel component="legend">Status</FormLabel>
            <RadioGroup
              aria-label="status"
              name="gender"
              value={user.gender}
              row
              onChange={onUserChange('gender')}
            >
              <FormControlLabel
                value={'male'}
                control={<PeaRadio />}
                label="Male"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'female'}
                control={<PeaRadio />}
                label="Female"
                labelPlacement="end"
              />
              <FormControlLabel
                value={'non-binary'}
                control={<PeaRadio />}
                label="Non-binary"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <PeaAutocompleteList
          value={user.tags}
          canCreate
          fullWidth
          placeholder={'Tags'}
          onChange={onTagsChanged}
          isMulti
          hideSuggestions
          removeSpacing
        />

        <>
          <TextField
            label={'Email'}
            value={user.email}
            margin={'normal'}
            fullWidth
            error={error.email}
            helperText={error.email ? 'Invalid Email' : ''}
            onChange={onUserChange('email')}
          />
          <TextField
            label={'Phone'}
            value={user.phoneNumber}
            placeholder={'Please enter your phone'}
            margin={'normal'}
            fullWidth
            error={error.phoneNumber}
            helperText={error.phoneNumber ? 'Invalid Phone Number' : ''}
            onChange={onUserChange('phoneNumber')}
          />
          <FormControl margin={'normal'} fullWidth>
            <FormLabel>Private account</FormLabel>
            <PeaSwitch
              checked={user.privateAccount}
              onChange={onUserChange('privateAccount')}
            />
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
};

PeaProfileEditor.propTypes = {
  image: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  userName: PropTypes.string,
  bio: PropTypes.string,
  birthday: PropTypes.string,
  location: PropTypes.shape({}),
  locationInput: PropTypes.func,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  gender: PropTypes.string,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  isPrivate: PropTypes.bool,
  isUpdating: PropTypes.bool,
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  onChangeCoverPhotoClicked: PropTypes.func.isRequired,
  onChangeProfilePhotosClicked: PropTypes.func.isRequired,
};

PeaProfileEditor.defaultProps = {
  userName: '',
  phoneNumber: undefined,
  bio: '',
  birthday: undefined,
  location: undefined,
  locationInput: undefined,
  tags: [],
  gender: undefined,
  isPrivate: false,
  isUpdating: false,
  onSubmit: () => {},
  onCancel: () => {},
};

PeaProfileEditor.propTypes = {};

PeaProfileEditor.defaultProps = {};

export default PeaProfileEditor;
