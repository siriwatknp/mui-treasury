import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { unstable_Box as Box } from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import TextField from '@material-ui/core/TextField';
import PeaRadio from './PeaRadio';
import PeaSwitch from './PeaSwitch';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';
import PeaStatistic from './PeaStatistic';
import PeaText from './PeaTypography';
import PeaSocialAvatar from './PeaSocialAvatar';
import PeaTag from './PeaTag';
import PeaTextArea from './PeaTextArea';

const PeaFullProfile = ({
  cover,
  image,
  name,
  tag,
  site,
  bio,
  location,
  age,
  gender,
  groups,
  tags,
}) => {
  const [editing, setEditing] = useState(false);
  const [anchorEl, setAnchor] = useState(null);
  const open = Boolean(anchorEl);
  const renderMenu = () => (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchor(null)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        style: {
          minWidth: 240,
        },
      }}
    >
      <MenuItem>
        <ListItemText disableTypography>
          <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
            Notifications
          </PeaText>
        </ListItemText>
        <ListItemSecondaryAction>
          <PeaSwitch />
        </ListItemSecondaryAction>
      </MenuItem>
      <Divider variant={'middle'} />
      <MenuItem>
        <ListItemText disableTypography>
          <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
            Receive emails
          </PeaText>
        </ListItemText>
        <ListItemSecondaryAction>
          <PeaSwitch />
        </ListItemSecondaryAction>
      </MenuItem>
      <Divider variant={'middle'} />
      <MenuItem
        onClick={() => {
          setEditing(true);
          setAnchor(null);
        }}
      >
        <ListItemText disableTypography>
          <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
            Edit profile
          </PeaText>
        </ListItemText>
        <PeaIcon>chevron_right</PeaIcon>
      </MenuItem>
      <Divider variant={'middle'} />
      <MenuItem>
        <ListItemText disableTypography>
          <PeaText color={'secondary'} variant={'body1'} weight={'bold'}>
            Contact support
          </PeaText>
        </ListItemText>
        <PeaIcon>chevron_right</PeaIcon>
      </MenuItem>
    </Menu>
  );
  return (
    <Card className={'PeaFullProfile-root'}>
      <CardMedia className={'MuiCardMedia-root'} image={cover}>
        {editing && (
          <ButtonBase className={'PeaFullProfile-coverImgBtn'}>
            <PeaIcon
              style={{ marginTop: -40 }}
              inverted
              icon={'panorama'}
              shape={'square'}
            />
            <PeaText inverted>Change cover picture</PeaText>
          </ButtonBase>
        )}
      </CardMedia>
      <CardContent className={'MuiCardContent-root'}>
        <Grid container justify={'space-between'} spacing={16}>
          <Grid item>
            {editing ? (
              <ButtonBase className={'PeaFullProfile-profileImgBtn'}>
                <PeaAvatar
                  className={'MuiAvatar-root-profilePic'}
                  src={image}
                />
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
            ) : (
              <PeaAvatar className={'MuiAvatar-root-profilePic'} src={image} />
            )}
          </Grid>
          {editing ? (
            <Grid item>
              <PeaButton
                size={'small'}
                onClick={() => setEditing(false)}
                style={{ marginRight: 8 }}
              >
                Cancel
              </PeaButton>
              <PeaButton
                size={'small'}
                onClick={() => setEditing(false)}
                variant={'contained'}
                color={'primary'}
                style={{ minWidth: 100 }}
              >
                Save
              </PeaButton>
            </Grid>
          ) : (
            <>
              <Hidden only={'xs'}>
                <Grid item>
                  <PeaStatistic label={'Pods'} value={2} />
                </Grid>
                <Grid item>
                  <PeaStatistic label={'Following'} value={48} />
                </Grid>
                <Grid item>
                  <PeaStatistic label={'Followers'} value={5} />
                </Grid>
              </Hidden>
              <Grid item>
                <PeaButton
                  size={'small'}
                  variant={'outlined'}
                  labelExpanded={false}
                  icon={'settings'}
                  iconIsolated
                  iconProps={{
                    color: 'primary',
                    size: 'small',
                  }}
                >
                  Settings
                </PeaButton>
              </Grid>
              <Grid item>
                <IconButton onClick={e => setAnchor(e.currentTarget)}>
                  <PeaIcon>more_vert</PeaIcon>
                </IconButton>
                {renderMenu()}
              </Grid>
            </>
          )}
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
        {editing ? (
          <div>
            <TextField margin={'normal'} label={'Name'} value={name} />
          </div>
        ) : (
          <PeaText variant={'h5'} weight={'bold'}>
            {name}
          </PeaText>
        )}
        {editing ? (
          <div>
            <TextField margin={'normal'} label={'Username'} value={tag} />
          </div>
        ) : (
          <PeaText gutterBottom>{tag}</PeaText>
        )}
        {editing ? (
          <TextField
            fullWidth
            margin={'normal'}
            label={'Website'}
            value={site}
          />
        ) : (
          <PeaText>
            <Link
              color={'primary'}
              href={site}
              target={'_blank'}
              rel={'noopener'}
            >
              {site}
            </Link>
          </PeaText>
        )}
        <br />
        {editing ? (
          <PeaTextArea.Simple label={'Bio'} value={bio} />
        ) : (
          <Grid container wrap={'nowrap'} spacing={8}>
            <Grid item>
              <PeaText link underline={'none'}>
                <b>Bio:</b>
              </PeaText>
            </Grid>
            <Grid item>
              <PeaText gutterBottom>{bio}</PeaText>
            </Grid>
          </Grid>
        )}
        {editing ? (
          <PeaTextArea.Simple label={'Location'} value={location} />
        ) : (
          <Grid container wrap={'nowrap'} spacing={8}>
            <Grid item>
              <PeaIcon color={'secondary'} size={'small'}>
                location_on
              </PeaIcon>
            </Grid>
            <Grid item>
              <PeaText gutterBottom>{location}</PeaText>
            </Grid>
          </Grid>
        )}
        <br />
        <PeaText gutterBottom variant={'subtitle1'} weight={'bold'}>
          About
        </PeaText>
        {editing ? (
          <Grid container spacing={16}>
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
        ) : (
          <PeaText gutterBottom>
            <PeaText link underline={'none'}>
              <b>Age:</b>
            </PeaText>{' '}
            {age}
          </PeaText>
        )}
        {editing ? (
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
        ) : (
          <PeaText gutterBottom>
            <PeaText link underline={'none'}>
              <b>Gender:</b>
            </PeaText>{' '}
            {gender}
          </PeaText>
        )}
        {!editing && (
          <>
            <PeaText link underline={'none'} gutterBottom>
              <b>Groups</b>
            </PeaText>
            <PeaText gutterBottom />
            <Grid container spacing={16}>
              {groups.map(item => (
                <Grid item key={item.name}>
                  <PeaSocialAvatar {...item} />
                </Grid>
              ))}
            </Grid>
            <br />
          </>
        )}
        {editing ? (
          <PeaTextArea.Simple
            label={'Tags'}
            value={tags.map(({ label }) => `#${label}`).join(', ')}
          />
        ) : (
          <>
            <PeaText link underline={'none'} gutterBottom>
              <b>Tags</b>
            </PeaText>
            <PeaText gutterBottom />
            <Grid container spacing={8}>
              {tags.map(item => (
                <Grid item key={item.label}>
                  <PeaTag
                    color={'secondary'}
                    label={`#${item.label}`}
                    onClick={() => {}}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
        {editing && (
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
        )}
      </CardContent>
    </Card>
  );
};

PeaFullProfile.propTypes = {
  image: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  site: PropTypes.string,
  bio: PropTypes.string,
  location: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  gender: PropTypes.string,
  groups: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      src: PropTypes.string,
    }),
  ),
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
    }),
  ),
};
PeaFullProfile.defaultProps = {
  tag: '',
  site: '',
  bio: '',
  location: '',
  age: 'unknown',
  gender: 'unknown',
  groups: [],
  tags: [],
};
PeaFullProfile.metadata = {
  name: 'Pea Full Profile',
};
PeaFullProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaFullProfile;
