import Tab from '@material-ui/core/Tab/Tab';
import Tabs from '@material-ui/core/Tabs/Tabs';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ButtonBase from '@material-ui/core/ButtonBase';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import PeaButton from './PeaButton';
import PeaIcon from './PeaIcon';
import PeaAvatar from './PeaAvatar';
import PeaPodCard from './PeaPodCard';
import PeaStatistic from './PeaStatistic';
import PeaText from './PeaTypography';
import PeaSocialAvatar from './PeaSocialAvatar';
import PeaTag from './PeaTag';
import PeaProfileEditor from './PeaProfileEditor';

const PeaAccountProfile = ({
  isCurrentUser,
  cover,
  image,
  name,
  userName,
  email,
  tag,
  site,
  bio,
  location,
  age,
  gender,
  groups,
  tags,
  pods,
  reputation,
  followersCount,
  followingCount,
  isPrivate,
  groupList,
  onSubmit,
  editing,
  setEditing,
}) => {
  const [index, onChange] = useState(0);
  const [anchorEl, setAnchor] = useState(null);
  const open = Boolean(anchorEl);
  if (editing) {
    return (
      <PeaProfileEditor
        cover={cover}
        image={image}
        name={name}
        userName={userName}
        email={email}
        tag={tag}
        tags={tags}
        site={site}
        bio={bio}
        location={location}
        isPrivate={isPrivate}
        onSubmit={onSubmit}
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
      <MenuItem onClick={() => setAnchor(null)}>
        <ListItemText disableTypography>
          <PeaText color={'error'} variant={'body1'} weight={'bold'}>
            Block {tag}
          </PeaText>
        </ListItemText>
      </MenuItem>
      <Divider variant={'middle'} />
      <MenuItem onClick={() => setAnchor(null)}>
        <ListItemText disableTypography>
          <PeaText color={'error'} variant={'body1'} weight={'bold'}>
            Report {tag}
          </PeaText>
        </ListItemText>
      </MenuItem>
    </Menu>
  );
  return (
    <Card className={'PeaAccountProfile-root'}>
      <CardMedia className={'MuiCardMedia-root'} image={cover} />
      <CardContent className={'MuiCardContent-root'}>
        <Grid container justify={'space-between'} spacing={2}>
          <Grid item style={{ height: 0 }}>
            {editing ? (
              <ButtonBase className={'PeaAccountProfile-profileImgBtn'}>
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
              <PeaStatistic label={'Pods'} value={pods.length} />
            </Grid>
            <Grid item>
              <PeaStatistic label={'Following'} value={followingCount} />
            </Grid>
            <Grid item>
              <PeaStatistic label={'Followers'} value={followersCount} />
            </Grid>
          </Hidden>
          <Grid item className={'MuiGrid-item -reputation'}>
            <PeaText color={'secondary'} weight={'bold'} align={'center'}>
              Reputation: {reputation}
            </PeaText>
          </Grid>
        </Grid>
        <Box mt={4} mb={3}>
          <Grid className={'MuiGrid-container -actions'} container spacing={1}>
            <Grid item>
              <PeaButton
                variant={'contained'}
                color={'primary'}
                size={'small'}
                onClick={isCurrentUser ? () => setEditing(true) : null}
              >
                {isCurrentUser ? 'Edit' : 'Follow'}
              </PeaButton>
            </Grid>
            <Grid item>
              <PeaButton variant={'outlined'} color={'primary'} size={'small'}>
                Invite
              </PeaButton>
            </Grid>
            <Grid item>
              <PeaButton icon={'email'} size={'small'} shape={'circular'}>
                message
              </PeaButton>
            </Grid>
            {!isCurrentUser && (
              <Grid item>
                <PeaButton
                  icon={'more_vert'}
                  size={'small'}
                  shape={'circular'}
                  onClick={e => setAnchor(e.currentTarget)}
                >
                  more
                </PeaButton>
                {renderMenu()}
              </Grid>
            )}
          </Grid>
        </Box>
        <Hidden smUp>
          <Grid container justify={'space-evenly'}>
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
      </CardContent>
      <Tabs
        className={'MuiTabs-root'}
        variant={'fullWidth'}
        centered
        value={index}
        onChange={(e, val) => onChange(val)}
      >
        <Tab label="Pods" disableRipple />
        <Tab label="About" disableRipple />
        <Tab label="Groups" disableRipple />
      </Tabs>
      {index === 0 && (
        <Box minHeight={300} bgcolor={'grey.100'} p={3}>
          {pods.map(item => (
            <PeaPodCard key={item.title} {...item} />
          ))}
        </Box>
      )}
      {index === 1 && (
        <Box p={2} textAlign={'left'}>
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
        </Box>
      )}
      {index === 2 && <Box minHeight={500}>{groupList}</Box>}
    </Card>
  );
};

PeaAccountProfile.propTypes = {
  image: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  userName: PropTypes.string,
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
  reputation: PropTypes.number,
  pods: PropTypes.arrayOf(PropTypes.shape({})),

  isCurrentUser: PropTypes.bool,
  email: PropTypes.string,
  followersCount: PropTypes.number,
  followingCount: PropTypes.number,
  isPrivate: PropTypes.bool,
  groupList: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onSubmit: PropTypes.func,
  editing: PropTypes.bool,
  setEditing: PropTypes.func,
};
PeaAccountProfile.defaultProps = {
  userName: '',
  tag: '',
  site: '',
  bio: '',
  location: '',
  age: 'unknown',
  gender: 'unknown',
  groups: [],
  tags: [],
  reputation: 0,
  pods: [],
  isCurrentUser: false,
  email: '',
  followersCount: 0,
  followingCount: 0,
  isPrivate: false,
  editing: false,
  groupList: undefined,
  onSubmit: () => {},
  setEditing: () => {},
};
PeaAccountProfile.metadata = {
  name: 'Pea Account Profile',
};
PeaAccountProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaAccountProfile;
