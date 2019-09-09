import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
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
import PeaSwitch from './PeaSwitch';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';
import PeaStatistic from './PeaStatistic';
import PeaText from './PeaTypography';
import PeaSocialAvatar from './PeaSocialAvatar';
import PeaTag from './PeaTag';
import PeaProfileEditor from './PeaProfileEditor';

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
  if (editing) {
    return (
      <PeaProfileEditor
        cover={cover}
        image={image}
        name={name}
        tag={tag}
        tags={tags}
        site={site}
        bio={bio}
        location={location}
        onSubmit={() => setEditing(false)}
        onCancel={() => setEditing(false)}
      />
    );
  }
  const renderMenu = () => (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={() => setAnchor(null)}
      anchorOrigin={{
        vertical: 'top',
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
      <CardMedia className={'MuiCardMedia-root'} image={cover} />
      <CardContent className={'MuiCardContent-root'}>
        <Grid container justify={'space-between'} spacing={2} wrap={'nowrap'}>
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
              iconProps={{
                color: 'primary',
                size: 'small',
              }}
              style={{ marginTop: 6 }}
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
        <PeaText variant={'h5'} weight={'bold'}>
          {name}
        </PeaText>
        <PeaText gutterBottom>{tag}</PeaText>
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
        <br />
        <Grid container wrap={'nowrap'} spacing={1}>
          <Grid item>
            <PeaIcon color={'secondary'} size={'small'}>
              info
            </PeaIcon>
          </Grid>
          <Grid item>
            <PeaText gutterBottom>{bio}</PeaText>
          </Grid>
        </Grid>
        <Grid container wrap={'nowrap'} spacing={1}>
          <Grid item>
            <PeaIcon color={'secondary'} size={'small'}>
              location_on
            </PeaIcon>
          </Grid>
          <Grid item>
            <PeaText gutterBottom>{location}</PeaText>
          </Grid>
        </Grid>
        <br />
        <PeaText gutterBottom variant={'subtitle1'} weight={'bold'}>
          About
        </PeaText>
        <PeaText gutterBottom>
          <PeaText link underline={'none'}>
            <b>Age :</b>
          </PeaText>{' '}
          {age}
        </PeaText>
        <PeaText gutterBottom>
          <PeaText link underline={'none'}>
            <b>Gender :</b>
          </PeaText>{' '}
          {gender}
        </PeaText>
        <PeaText link underline={'none'} gutterBottom>
          <b>Groups</b>
        </PeaText>
        <PeaText gutterBottom />
        <Grid container spacing={2}>
          {groups.map(item => (
            <Grid item key={item.name}>
              <PeaSocialAvatar {...item} />
            </Grid>
          ))}
        </Grid>
        <br />
        <PeaText link underline={'none'} gutterBottom>
          <b>Tags</b>
        </PeaText>
        <PeaText gutterBottom />
        <Grid container spacing={1}>
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
  name: 'Pea Full Profile Old',
};
PeaFullProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaFullProfile;
