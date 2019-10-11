/* eslint-disable react/forbid-prop-types */

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
import PeaConfirmation from './PeaConfirmation';
import PeaToast from './PeaToast';
import PeaInvitationDialog from './PeaInvitationDialog';

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
  pods,
  reputation,
  following,
  followers,
  invited,
  followed,
  blockedMe,
  blocked,
  loadingInviteList,
  onInviteClicked,
  onInvitePod,
  onInviteGroup,
  invitingIds,
  invitedIds,
  onFollow,
  onBlock,
  onReport,
}) => {
  const [index, onChange] = useState(0);
  const [editing, setEditing] = useState(false);
  const [anchorEl, setAnchor] = useState(null);
  const [openBlockConfirm, setOpenBlockConfirm] = useState(false);
  const [openBlockToast, setOpenBlockToast] = useState(false);
  const [openInviteDialog, setOpenInviteDialog] = useState(false);
  const open = Boolean(anchorEl);

  const onInvite = () => {
    if (onInviteClicked) {
      onInviteClicked();
    }
    setOpenInviteDialog(true);
  };

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
      <MenuItem
        onClick={() => {
          setOpenBlockConfirm(true);
          setAnchor(null);
        }}
      >
        <ListItemText disableTypography>
          <PeaText color={'error'} variant={'body1'} weight={'bold'}>
            Block {tag}
          </PeaText>
        </ListItemText>
      </MenuItem>
      <Divider variant={'middle'} />
      <MenuItem
        onClick={() => {
          onReport();
          setAnchor(null);
        }}
      >
        <ListItemText disableTypography>
          <PeaText color={'error'} variant={'body1'} weight={'bold'}>
            Report {tag}
          </PeaText>
        </ListItemText>
      </MenuItem>
    </Menu>
  );

  const renderTabs = () => (
    <>
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
      {index === 2 && <Box minHeight={300} />}
    </>
  );

  return (
    <>
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
                <PeaAvatar
                  className={'MuiAvatar-root-profilePic'}
                  src={image}
                />
              )}
            </Grid>
            <Hidden only={'xs'}>
              <Grid item>
                <PeaStatistic label={'Pods'} value={pods.length} />
              </Grid>
              <Grid item>
                <PeaStatistic label={'Following'} value={following} />
              </Grid>
              <Grid item>
                <PeaStatistic label={'Followers'} value={followers} />
              </Grid>
            </Hidden>
            <Grid item className={'MuiGrid-item -reputation'}>
              <PeaText color={'secondary'} weight={'bold'} align={'center'}>
                Reputation: {reputation}
              </PeaText>
            </Grid>
          </Grid>
          <Box mt={4} mb={3}>
            <Grid
              className={'MuiGrid-container -actions'}
              container
              spacing={1}
            >
              {!blockedMe && (
                <>
                  {blocked ? (
                    <Grid item>
                      <PeaButton
                        variant={'contained'}
                        color={'danger'}
                        size={'small'}
                        onClick={onBlock}
                      >
                        Unblock
                      </PeaButton>
                    </Grid>
                  ) : (
                    <>
                      <Grid item>
                        <PeaButton
                          variant={'contained'}
                          color={'primary'}
                          size={'small'}
                          disabled={followed}
                          onClick={onFollow}
                        >
                          Follow
                        </PeaButton>
                      </Grid>
                      <Grid item>
                        <PeaButton
                          variant={'outlined'}
                          color={'primary'}
                          size={'small'}
                          disabled={invited}
                          onClick={onInvite}
                        >
                          Invite
                        </PeaButton>
                      </Grid>
                    </>
                  )}
                  <Grid item>
                    <PeaButton
                      icon={'email'}
                      size={'small'}
                      shape={'circular'}
                      color={'primary'}
                    >
                      message
                    </PeaButton>
                  </Grid>
                </>
              )}
              <Grid item>
                <PeaButton
                  icon={'more_vert'}
                  size={'small'}
                  shape={'circular'}
                  color={'primary'}
                  onClick={e => setAnchor(e.currentTarget)}
                >
                  more
                </PeaButton>
                {renderMenu()}
              </Grid>
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
          {invited && (
            <Box mt={1} mb={1}>
              <PeaTag
                color={'primary'}
                label={'Invited by you'}
                src={image}
                onClick={() => {}}
              />
            </Box>
          )}
          {!blockedMe && (
            <>
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
            </>
          )}
        </CardContent>

        {blockedMe ? (
          <Box mt={1} mb={10} maxWidth={400} margin={'auto'}>
            <PeaText
              color={'error'}
              size={'big'}
              align={'center'}
              weight={'bold'}
            >
              {`${tag} has blocked you`}
            </PeaText>
            <PeaText color={'hint'} align={'center'}>
              {`You can't see the information about ${' '}
                ${tag} and invite ${tag} on the events.`}
            </PeaText>
          </Box>
        ) : (
          renderTabs()
        )}
      </Card>

      <PeaConfirmation
        title={`Block ${tag}`}
        content={`${tag} won't be able to see your profile information, ${' '}
          invite you on the events and send you messages`}
        open={openBlockConfirm}
        onClose={() => setOpenBlockConfirm(false)}
        onSubmit={() => {
          setOpenBlockConfirm(false);
          setOpenBlockToast(true);
          onBlock();
        }}
      />

      <PeaToast
        message={`${tag} has been blocked`}
        open={openBlockToast}
        onClose={() => setOpenBlockToast(false)}
        variant={'success'}
        position={{ horizontal: 'center', vertical: 'top' }}
      />

      <PeaInvitationDialog
        person={tag}
        pods={pods}
        loading={loadingInviteList}
        groups={groups}
        onInvitePod={onInvitePod}
        onInviteGroup={onInviteGroup}
        invitingIds={invitingIds}
        invitedIds={invitedIds}
        open={openInviteDialog}
        onClose={() => setOpenInviteDialog(false)}
      />
    </>
  );
};

PeaFullProfile.propTypes = {
  loadingInviteList: PropTypes.bool,
  onInvitePod: PropTypes.func.isRequired,
  onInviteGroup: PropTypes.func.isRequired,
  invitingIds: PropTypes.object,
  invitedIds: PropTypes.object,
  onInviteClicked: PropTypes.func,
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
  reputation: PropTypes.number,
  pods: PropTypes.arrayOf(PropTypes.shape({})),
  following: PropTypes.number,
  followers: PropTypes.number,
  invited: PropTypes.bool,
  followed: PropTypes.bool,
  blockedMe: PropTypes.bool,
  blocked: PropTypes.bool,
  onFollow: PropTypes.func,
  onBlock: PropTypes.func,
  onReport: PropTypes.func,
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
  reputation: 0,
  pods: [],
  following: 0,
  followers: 0,
  invited: false,
  followed: false,
  blockedMe: false,
  blocked: false,
  onFollow: () => {},
  onBlock: () => {},
  onReport: () => {},
  invitingIds: {},
  invitedIds: {},
  onInviteClicked: () => {},
  loadingInviteList: false,
};

PeaFullProfile.metadata = {
  name: 'Pea FullProfile',
};

PeaFullProfile.codeSandbox = 'https://codesandbox.io/s/zljn06jmq4';

export default PeaFullProfile;
